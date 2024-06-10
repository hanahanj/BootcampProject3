require("dotenv").config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/shirts-db');

module.exports = mongoose.connection;
