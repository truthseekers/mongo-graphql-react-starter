const { Post } = require("./models/Post");

const Query = {
  hello: () => "hello",
  posts: async () => {
    console.log("Posts: yeee");
    const posts = await Post.find();

    return [];
    // return posts; // can use this line after you connect to mongodb with correct string and add a record to the collection
  },
  locations: async () => {
    return [];
  },
};

const Mutation = {
  createPost: (parent, args, context, info) => {
    const post = new Post({ author: args.author, content: args.content });

    return post.save();
  },
};

const resolvers = {
  Query,
  Mutation,
};

module.exports = {
  resolvers,
};
