const db = require('../config/connection');
const { Shirt } = require('../models');
const shirtSeeds = require('./shirtSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Shirt', 'shirts');

    await Shirt.create(shirtSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
