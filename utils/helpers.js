const { BlogPost, Pets } = require('../models');


module.exports = {

    // remove format_time helper fuction, replace with actual helper functions
    // format_time function is here are a reminder 
    // of helper function definition syntax
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    isEqual: function (value1, operator, value2, options) {
      switch (operator) {
        case '===':
          return value1 === value2 ? options.fn(this) : options.inverse(this);
        case '!==':
          return value1 !== value2 ? options.fn(this) : options.inverse(this);
        // Add other comparison operators if needed
        default:
          return options.inverse(this);
      }
    },
    getRandomBlogPost: async () => {
      try {
        let randomPost = null;
        while (!randomPost) {
          const maxId = await BlogPost.max('id');
          const randomId = Math.floor(Math.random() * maxId) + 1;
          randomPost = await BlogPost.findByPk(randomId);
        }
        console.log(randomPost);
        return randomPost;
      } catch (error) {
        console.error('Error fetching random blog post:', error);
        return null;
      }
    },
    getRandomPet: async () => {
      try {
        let randomPet = null;
        while (!randomPet) {
          const maxId = await Pets.max('id');
          const randomId = Math.floor(Math.random() * maxId) + 1;
          randomPet = await Pets.findByPk(randomId);
        }
        console.log(randomPet);
        return randomPet;
      } catch (error) {
        console.error('Error fetching random pet:', error);
        return null;
      }
    },
  };

  
  
  
  
  