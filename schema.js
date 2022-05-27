const { gql } = require('apollo-server');
module.exports = gql`
  type Product {
    id: String!
    name: String!
    description: String!
    image: String!
    quantity: Int
    price: Float
    onSale: Boolean!
    reviews: [Review!]!
  }

  type Review {
    id: String!
    date: String!
    title: String
    comment: String
    rating: Int
    productId: String!
  }

  type Category {
    id: String!
    name: String!
    products: [Product!]!
  }

  type Query {
    products(input: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
  }

  input ProductsFilterInput {
    onSale: Boolean!
    avgRatings: Int!
  }

  input AddCategoryInput {
    name: String!
  }
`;
