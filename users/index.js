const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql(readFileSync('./users.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');
const UsersAPI = require('./datasources/UsersApi');

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        };
    }
});

const port = 4002;
const subgraphName = 'users';

server
    .listen({ port })
    .then(({ url }) => {
        console.log(`🚀 Subgraph ${ subgraphName } running at ${ url }`);
    })
    .catch(err => {
        console.error(err);
    })