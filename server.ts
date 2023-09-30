import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';

const app = express();

const typeArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const resolvers = loadFilesSync('**/*.resolvers.ts');

const schema = makeExecutableSchema({
  typeDefs: typeArray,
  resolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log('Serving GraphQl app...');
});
