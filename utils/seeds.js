const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const {userData,thoughtsData} = require('./data')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thoughts.deleteMany({});
  await User.deleteMany({});


  await User.collection.insertMany(userData);
  await Thoughts.collection.insertMany(thoughtsData);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(userData);
  console.table(thoughtsData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
