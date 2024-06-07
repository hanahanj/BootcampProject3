const { Shirt, Profile } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    shirts: async () => {
      return Shirt.find();
    },

    shirt: async (parent, { shirtId }) => {
      return Shirt.findOne({ _id: shirtId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.profile._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

  },
};

module.exports = resolvers;
