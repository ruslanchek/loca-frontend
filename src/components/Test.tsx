/** @jsx jsx */

import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider, Mutation, Query, Subscription } from 'react-apollo';
import { apolloClient } from '../api/network.layer';
import {
  CommonOrderDirection,
  CreatePhraseInput,
  GetPhrasesInput,
  Phrase,
  PhraseOrderBy,
} from '../generated/graphql.schema';
import { css, jsx } from '@emotion/core';

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

export class Test extends Component<IProps, IState> {
  state: IState = {
    phraseId: '',
  };

  render() {
    return (
      <div css={appStyles}>
        <ApolloProvider client={apolloClient}>
          <Query<{ getPhrases: Phrase[] }, GetPhrasesInput>
            query={QUERY_GET_PHRASES}
            variables={{
              skip: 0,
              take: 5,
              orderBy: PhraseOrderBy.id,
              orderDirection: CommonOrderDirection.DESC,
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
                      <div css="Code">
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
                        <div css="form">
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

                  <div css="List">
                    {data.getPhrases.map((phrase: Phrase) => (
                      <div css="Item" key={phrase.id}>
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

const appStyles = css`
  margin: 40px;

  .Code {
    font-family: monospace;
    padding: 20px;
    background: #eee;
    border-radius: 6px;
    margin-bottom: 1em;
  }

  .Form {
    border: 1px solid #eee;
    border-radius: 6px;
    margin-bottom: 1em;
    padding: 20px;
  }

  .Form input {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    margin-bottom: 10px;
  }

  .List {
    .Item {
      padding: 10px 20px;
      border: 1px solid #eee;
      background: #eee;
      border-radius: 6px;
      margin-bottom: 0.25em;
    }
  }
`;
