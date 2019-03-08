import { InMemoryCache, ApolloLink, Operation, HttpLink } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
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
  link,
});
