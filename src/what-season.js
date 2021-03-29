const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (typeof date === 'undefined') {
    throw new CustomError('Date is not set');
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new CustomError('Date is invalid');
  }

  let day = date.getDate();
  let month = date.getMonth() + 1;



  if (3 <= month && month <= 5) {
    return 'spring';
  } else if (6 <= month && month <= 8) {
    return 'summer';
  } else if (9 <= month && month <= 11) {
    return 'autumn';
  } else if (12 == month && month <= 2) {
    return 'winter';
  } else if (date === null) {
    return 'Unable to determine the time of year!';
  } else {
    throw new CustomError('Not implemented');
  }
  
};
