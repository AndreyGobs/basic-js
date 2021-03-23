const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  
  let cats = 0;
  for (i = 0; i < backyard.length; i++) {

    backyard[i].map(function(item, index) {
      if (item === '^^') {
        cats = cats + 1;
      }
    }) 
  }

  return cats;
};
