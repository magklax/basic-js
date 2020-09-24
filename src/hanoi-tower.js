const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const hanoiObject = {};
  
  hanoiObject.turns = Math.pow(2, disksNumber) - 1;
  hanoiObject.seconds = Math.floor((hanoiObject.turns) / turnsSpeed * 3600);

  return hanoiObject;
};
