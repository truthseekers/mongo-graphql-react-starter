// const { gql } = require("@apollo/server");

const typeDefs = `
  type Query {
    hello: String!
    posts: [Post!]!
    locations: [Location!]!
  }
  type Mutation {
    createPost(author: String!, content: String!): Post!
  }
  type Post {
    id: ID!
    author: String!
    content: String!
  }
  type Location {
    id: ID!
    name: String!
    description: String!
    photo: String!
  }
`;

module.exports = {
  typeDefs,
};
