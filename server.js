"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_graphql_1 = require("express-graphql");
var schema_1 = require("@graphql-tools/schema");
var load_files_1 = require("@graphql-tools/load-files");
var app = (0, express_1.default)();
var typeArray = (0, load_files_1.loadFilesSync)('**/*', {
    extensions: ['graphql'],
});
var resolvers = (0, load_files_1.loadFilesSync)('**/*.resolvers.ts');
var schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typeArray,
    resolvers: resolvers,
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    graphiql: true,
}));
app.listen(3000, function () {
    console.log('Serving GraphQl app...');
});
