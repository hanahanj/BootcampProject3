const db = require('../config/connection');
const Shirt = require('../models/Shirt');
const cleanDB = require('./cleanDB');
const shirtData = require('./shirtData.json');

db.once('open', async () => {
  await cleanDB('Shirt', 'shirts');

  await Shirt.insertMany(shirtData);

  console.log('Shirts seeded!');
  process.exit(0);
});
