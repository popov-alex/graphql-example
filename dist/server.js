"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("@graphql-tools/schema");
const load_files_1 = require("@graphql-tools/load-files");
const app = (0, express_1.default)();
const typeArray = (0, load_files_1.loadFilesSync)('**/*', {
    extensions: ['graphql'],
});
const resolvers = (0, load_files_1.loadFilesSync)('**/*.resolvers.ts');
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typeArray,
    resolvers,
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema,
    graphiql: true,
}));
app.listen(3000, () => {
    console.log('Serving GraphQl app...');
});
