import express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { ApolloServer } from 'apollo-server-express';

import productsResolver from './products/products.resolvers';
import ordersResolver from './orders/orders.resolvers';

const typeArray = loadFilesSync('./src/**/*', {
  extensions: ['graphql'],
});
console.log('Loaded type definitions:', typeArray);

// Combine the imported resolvers
const combinedResolvers = {
  Query: {
    ...productsResolver.Query,
    ...ordersResolver.Query,
  },
  Mutation: {
    ...productsResolver.Mutation,
  },
};
console.log('Combined resolvers:', combinedResolvers);

const startApolloServer = async () => {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: combinedResolvers,
  });
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(3000, () => {
    console.log('Serving GraphQL app...');
  });
};

startApolloServer();
