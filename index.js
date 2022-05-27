const { ApolloServer } = require('apollo-server');
const Product = require('./resolvers/product');
const Category = require('./resolvers/category');
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');
const typeDefs = require('./schema');
const { db } = require('./db');
const resolvers = {
  Query,
  Category,
  Product,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db
  },
});

server.listen().then(({ url }) => {
  console.log(`server is ready  at ${url}`);
});
