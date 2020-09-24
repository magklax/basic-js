const CustomError = require('../extensions/custom-error');

module.exports = function countCats(backyard) {
  let number = 0;
  
  backyard.forEach(function (array) {
    array.forEach(function (elem) {
      if (elem === '^^') {
        number++;
      }
    })
  });
  
  return number;
};
