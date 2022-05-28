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
    category: Category
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
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean
    deleteProduct(id: ID!): Boolean
    deleteReview(id: ID): Boolean
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    updateProduct(id: ID!, input: UpdateProductInput!): Product!
    updateReview(id: ID!, input: UpdateReviewInput!): Review!
  }

  input ProductsFilterInput {
    onSale: Boolean!
    avgRatings: Int!
  }

  input AddCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    categoryId: String
  }

  input UpdateProductInput {
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: ID
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }

  input UpdateReviewInput {
    date: String
    title: String
    comment: String
    rating: Int
  }
`;
