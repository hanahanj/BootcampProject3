const db = require('../config/connection');
const { Shirt, Profile } = require('../models');
const shirtSeeds = require('./shirtSeeds.json');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Shirt', 'shirts');
    await cleanDB('Profile', 'profiles');

    await Shirt.create(shirtSeeds);
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
