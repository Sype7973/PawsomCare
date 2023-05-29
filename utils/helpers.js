const { BlogPost, Pets } = require('../Models');


module.exports = {

    format_date: (date) => {
      // Format date as MM DD YYYY H:M AM/PM
      const options = { weekday: 'short', day: 'numeric', month: 'short', 
      year: 'numeric', hour: 'numeric', minute: 'numeric'};
  
      const formattedTimeStamp = date.toLocaleDateString(undefined, options);
  
      const parts = formattedTimeStamp.split(' ');
      const formattedDate = `${parts[0]} ${parts[2]} ${parts[1]} ${parts[3]} ${parts[4]} ${parts[5]}`;
      
  
      return formattedDate.replace(/,/g, '');
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
    generateLinks: function (petType) {
      var links = '';
    
      if (petType === 'cat') {
        links += '<a href="https://kb.rspca.org.au/article-categories/caring-for-my-cat/" class="button is-link is-rounded is-fullwidth is-centered is-flex-direction-column" target="_blank">RSPCA Cat Care</a>';
        links += '<a href="https://www.petfoodreviews.com.au/best-cat-food-australia/" class="button is-link is-rounded is-fullwidth  is-centered is-flex-direction-column" target="_blank">Best Cat Food</a>';
        links += '<a href="https://www.purina.com.au/cats/care/cat-facts" class="button is-link is-rounded is-fullwidth  is-centered is-flex-direction-column" target="_blank">Purina Cat Facts</a>';
      } else if (petType === 'dog') {
        links += '<a href="https://kb.rspca.org.au/knowledge-base/how-do-i-keep-my-dog-healthy/" class="button is-link is-rounded is-fullwidth is-centered is-flex-direction-column" target="_blank">RSPCA Dog Care</a>';
        links += '<a href="https://www.petfoodreviews.com.au/best-dog-food-australia/" class="button is-link is-rounded is-fullwidth  is-centered is-flex-direction-column" target="_blank">Best Dog Food</a>';
        links += '<a href="https://www.petbarn.com.au/petspot/dog/exercise-and-stimulation/how-much-exercise-does-my-dog-need/" class="button is-link is-rounded is-fullwidth  is-centered is-flex-direction-column" target="_blank">Dog Exercise</a>';
      }
    
      return links;
    },
    
    placeholderImage: function (petType) {
      let placeholderImage;
      if (petType === 'cat') {
        placeholderImage = 'cat-placeholder.png';
      } else {
        placeholderImage = 'dog-placeholder.png';
      }
      return placeholderImage;
    },
};

