const db = require('../config/connection');
const Shirt = require('../models/Shirt');
const cleanDB = require('./cleanDB');
const shirtData = require('./shirtData.json');

db.once('open', async () => {
  try {
    await cleanDB('Shirt', 'shirts');

    await Shirt.create(shirtData);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
