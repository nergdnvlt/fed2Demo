const resolvers = {
  Query: {
    users: (_, __, {dataSources}) => {
      return dataSources.usersAPI.getAllUsers();
    },
    user: (_, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUser(id);
    },
  }
};

module.exports = resolvers;
