const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
  	return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error();
  }

  let string;

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      string = 'winter';
      break;
    case 2:
    case 3:
    case 4:
    	string = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      string = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      string = 'autumn';
      break; 
  }

  return string;
}

