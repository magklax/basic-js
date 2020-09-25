const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	const { 
    repeatTimes = 1, 
    separator = '+', 
    addition ='', 
    additionRepeatTimes = 1, 
    additionSeparator = '|' 
  } = options;

  let result = '';
  for (let j = 0; j < additionRepeatTimes; j++) {
    str += String(addition);

    if (j < additionRepeatTimes - 1) {
      str += additionSeparator;
    }
  }

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      result += String(str) ;
      
      if (i < repeatTimes - 1) {
        result += separator;
      }
    }
  }
  
  return result;
};
  