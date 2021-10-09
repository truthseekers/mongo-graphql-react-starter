const { Post } = require("./models/Post");

const Query = {
  hello: () => "hello",
  posts: async () => {
    const posts = await Post.find();

    return posts;
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
