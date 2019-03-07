import React, { Component } from 'react';
import './App.css';
import gql from 'graphql-tag';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache, ApolloLink, Operation, HttpLink } from 'apollo-boost';
import { ApolloProvider, Mutation, Query, Subscription } from 'react-apollo';
import { CreatePhraseInput, Phrase } from './graphql.schema';
import { ApolloClient } from 'apollo-client';
import { DefinitionNode } from 'graphql';

const hasSubscriptionOperation = (operation: Operation): boolean => {
  return operation.query.definitions.some((definition: DefinitionNode) => {
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  });
};

const link = ApolloLink.split(
  hasSubscriptionOperation,
  new WebSocketLink({
    uri: 'ws://mbrtn.local:9001/graphql',
    options: { reconnect: true },
  }),
  new HttpLink({
    uri: 'http://mbrtn.local:9001/graphql',
  }),
);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const QUERY = gql`
  {
    getPhrases {
      id
      phraseId
    }
  }
`;

const MUTATION = gql`
  mutation($phraseId: String, $projectId: Int) {
    createPhrase(
      createPhraseInput: { phraseId: $phraseId, projectId: $projectId }
    ) {
      phraseId
      id
      tags
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription {
    phraseCreated {
      id
      phraseId
      tags
    }
  }
`;

interface IProps {}

interface IState {
  phraseId: string | undefined;
}

class App extends Component<IProps, IState> {
  state: IState = {
    phraseId: '',
  };

  render() {
    return (
      <div className="App">
        <ApolloProvider client={apolloClient}>
          <Query query={QUERY}>
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return 'Loading...';
              }

              if (error) {
                return `Error! ${error.message}`;
              }

              return (
                <>
                  <Subscription
                    subscription={SUBSCRIPTION}
                    onSubscriptionData={() => {
                      refetch();
                    }}
                  >
                    {({ data, loading }) => (
                      <div className="Code">
                        {loading && <div>Waiting...</div>}
                        {JSON.stringify(data)}
                      </div>
                    )}
                  </Subscription>

                  <Mutation mutation={MUTATION}>
                    {(
                      createPhrase: (data: {
                        variables: CreatePhraseInput;
                      }) => void,
                      { data },
                    ) => (
                      <div className="Form">
                        <form
                          onSubmit={e => {
                            e.preventDefault();
                            createPhrase({
                              variables: {
                                phraseId: this.state.phraseId,
                                projectId: 1,
                              },
                            });
                            this.setState({
                              phraseId: '',
                            });
                          }}
                        >
                          <input
                            placeholder="Title"
                            value={this.state.phraseId}
                            onChange={e => {
                              this.setState({
                                phraseId: e.target.value,
                              });
                            }}
                          />

                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    )}
                  </Mutation>

                  <div className="List">
                    {data.getPhrases.map((phrase: Phrase) => (
                      <div className="Item" key={phrase.id}>
                        {phrase.id}. {phrase.phraseId}
                      </div>
                    ))}
                  </div>
                </>
              );
            }}
          </Query>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
