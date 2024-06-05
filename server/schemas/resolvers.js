const { User, Shirt } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('shirts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('shirts');
    },
    shirts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Shirt.find(params).sort({ createdAt: -1 });
    },
    shirt: async (parent, { shirtId }) => {
      return Shirt.findOne({ _id: shirtId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('shirts');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
