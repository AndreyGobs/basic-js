const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {
  
    if (typeof x !== 'string' || x == null || x >= 15 || x <= 0 || !isFinite(x)) {
        return false;
    }

    let k = Math.log(2)/ HALF_LIFE_PERIOD;
    let a = Math.log(MODERN_ACTIVITY / x) / k ;
    return Math.ceil(a);
  
};
