const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
    },

    Mutation: {
        addUser: async (_, { username, email, password }) => {
          try {
            console.log("addUser mutation called with:", { username, email, password });
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ username, email, password: hashedPassword });
    
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
            return {
              token,
              user,
            };
          } catch (error) {
            console.error("Error in addUser mutation:", error);
            throw new Error('Error creating user');
          }
        },
      },

}

module.exports = resolvers