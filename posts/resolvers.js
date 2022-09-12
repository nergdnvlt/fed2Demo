const resolvers = {
  Query: {
    posts: (_, __, { dataSources }) => {
      return dataSources.postsAPI.getAllPosts();
    },
    post: (_, { id }, { dataSources }) => {
      return dataSources.postsAPI.getPost(id);
    },
  },
};

module.exports = resolvers;
