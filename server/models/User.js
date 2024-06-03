const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

// import schema from Shirt.js
const shirtSchema = require('./Shirt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedShirts to be an array of data that adheres to the shirtSchema
    savedShirts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Shirt'
      }
    ]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `shirtCount` with the number of saved shirts we have
userSchema.virtual('shirtCount').get(function () {
  return this.savedShirts.length;
});

const User = model('User', userSchema);

module.exports = User;
