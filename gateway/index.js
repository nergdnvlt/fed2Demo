// External Dependencies
const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require("apollo-server");
require('dotenv').config();

// Variable Definition
const port = process.env.PORT || 4000;
const APOLLO_KEY = process.env.APOLLO_KEY;

// Apollo Server and Gateway Setup
const gateway = new ApolloGateway({});

const server = new ApolloServer({
    gateway,
    subscriptions: false,
});

server.listen({ port }).then(({ url }) => {
    console.log(`Server ready at ${ url }`);
});