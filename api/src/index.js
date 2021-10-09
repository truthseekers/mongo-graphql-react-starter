const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const express = require("express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const mongoose = require("mongoose");

const app = express();
const httpServer = http.createServer(app);
const corsOptions = {
  credentials: true,
  origin: ["https://studio.apollographql.com", "http://localhost:3000"],
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

const startServer = async () => {
  await server.start();

  server.applyMiddleware({ app, cors: corsOptions });

  await mongoose.connect(
    `mongodb+srv://john:Password1!@cluster0.snuui.mongodb.net/mongo-graphql-starter?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  );

  console.log("hi");

  app.listen({ port: 4000 }, () =>
    console.log(
      `graphql server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  );
};

startServer();
