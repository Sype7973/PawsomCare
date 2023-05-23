const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await BlogPost.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
