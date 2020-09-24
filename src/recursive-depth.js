const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthCounter = 1;
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        let tempDepth = 1;
        tempDepth += this.calculateDepth(elem);

        if (tempDepth > depthCounter) {
          depthCounter = tempDepth;
        };
      }
    });
    return depthCounter;
  };
};