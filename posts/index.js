const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql(readFileSync('./posts.graphql', { encoding: 'utf-8'}));
const resolvers = require('./resolvers');
const PostsAPI = require('./datasources/PostsApi');

const pry = require('pry');

const server = new ApolloServer({
    schema: buildSubgraphSchema({typeDefs, resolvers}),
    dataSources: () => {
        return {
            postsAPI: new PostsAPI()
        };
    }
});

const port = 4001;
const subgraphName = 'posts';

server
    .listen({ port })
    .then(({ url }) => {
        console.log(`🚀 Subgraph ${ subgraphName } running at ${ url }`);
    })
    .catch(err => {
        console.error(err);
    });