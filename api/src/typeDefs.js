const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    posts: [Post!]!
  }

  type Mutation {
    createPost(author: String!, content: String!): Post!
  }

  type Post {
    id: ID!
    author: String!
    content: String!
  }
`;

module.exports = {
  typeDefs,
};
