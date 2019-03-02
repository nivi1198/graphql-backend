
/*** Old Code ***/
//const { ApolloServer, gql } = require('apollo-server');
//const resolvers = require('./resolvers');
//const server = new ApolloServer({ typeDefs, resolvers });

/** Changes **/
const express = require('express');
const middleware = require('express-graphql')
const cors = require('cors');
const server = express();;
const Schema = require('./schema');
const ignoreFavicon = require('./ignoreFavicon');

server.use(cors(), ignoreFavicon);
server.use('', middleware({
    schema: Schema,
    pretty: true,
    graphiql: true

}))
const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server ready at ${PORT}`);
});