import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';

import productsResolver from './src/products/products.resolvers';
import ordersResolver from './src/orders/orders.resolvers';

const app = express();

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
  // If you have other types (e.g., Mutation, Subscription), add them similarly
};
console.log('Combined resolvers:', combinedResolvers);

const schema = makeExecutableSchema({
  typeDefs: typeArray,
  resolvers: combinedResolvers,
});

app.use(
  '/graphql',
  (req, res, next) => {
    console.log('Received request on /graphql endpoint', req.body);
    next();
  },
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log('Serving GraphQL app...');
});
