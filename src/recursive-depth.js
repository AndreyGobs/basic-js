const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  let countDepth = 0;

    if (Array.isArray(arr)) {
      countDepth++;

      arr.forEach(element => {
        if (Array.isArray(element)) {
          countDepth += this.calculateDepth(element);
        }
      });

    }

    return countDepth;
  }
};
