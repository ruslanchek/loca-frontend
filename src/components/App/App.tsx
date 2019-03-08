import React, { Component } from 'react';
import './App.scss';
import gql from 'graphql-tag';
import { ApolloProvider, Mutation, Query, Subscription } from 'react-apollo';
import { apolloClient } from '../../api/network.layer';
import {
  CommonOrderDirection,
  CreatePhraseInput,
  GetPhrasesInput,
  Phrase,
  PhraseOrderBy,
} from '../../generated/graphql.schema';

const QUERY_GET_PHRASES = gql`
  query(
    $skip: Int!
    $take: Int!
    $orderBy: PhraseOrderBy!
    $orderDirection: CommonOrderDirection!
  ) {
    getPhrases(
      getPhrasesInput: {
        skip: $skip
        take: $take
        orderBy: $orderBy
        orderDirection: $orderDirection
      }
    ) {
      id
      phraseId
      tags
    }
  }
`;

const MUTATION_CREATE_PHRASE = gql`
  mutation($phraseId: String!, $projectId: Int!) {
    createPhrase(
      createPhraseInput: { phraseId: $phraseId, projectId: $projectId }
    ) {
      phraseId
      id
      tags
    }
  }
`;

const SUBSCRIPTION_PHRASE_CREATED = gql`
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
  phraseId: string;
}

class App extends Component<IProps, IState> {
  state: IState = {
    phraseId: '',
  };

  render() {
    return (
      <div className="App">
        <ApolloProvider client={apolloClient}>
          <Query<{ getPhrases: Phrase[] }, GetPhrasesInput>
            query={QUERY_GET_PHRASES}
            variables={{
              skip: 10,
              take: 5,
              orderBy: PhraseOrderBy.phraseId,
              orderDirection: CommonOrderDirection.ASC,
            }}
          >
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return 'Loading...';
              }

              if (error) {
                return `Error! ${error.message}`;
              }

              return (
                <>
                  <Subscription<{ phraseCreated: Phrase }, {}>
                    subscription={SUBSCRIPTION_PHRASE_CREATED}
                    onSubscriptionData={() => {
                      refetch();
                    }}
                  >
                    {result => (
                      <div className="Code">
                        {result.loading && <div>Waiting...</div>}
                        {JSON.stringify(result.data)}
                      </div>
                    )}
                  </Subscription>

                  <Mutation<{ createPhrase: Phrase }, CreatePhraseInput>
                    mutation={MUTATION_CREATE_PHRASE}
                  >
                    {(createPhrase, result) => {
                      return (
                        <div className="Form">
                          <form
                            onSubmit={e => {
                              e.preventDefault();

                              createPhrase({
                                variables: {
                                  phraseId: this.state.phraseId,
                                  projectId: 1,
                                  tags: [],
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
                      );
                    }}
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
