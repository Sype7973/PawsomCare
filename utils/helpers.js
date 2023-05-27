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
  };