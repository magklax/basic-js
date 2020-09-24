const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || sampleActivity <= 0 || sampleActivity > 15 || isNaN(parseFloat(sampleActivity))) return false;
  return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) / LN2 * HALF_LIFE_PERIOD));
};
