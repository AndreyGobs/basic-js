const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }

  let result = [];
  let tail = [str];
  let longTail = [];

  if (options.separator == undefined) {
      options.separator = '+';
  }

  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
}

  if (options.additionRepeatTimes) {

      for (let i = 0; i < options.additionRepeatTimes; i++) {
          tail.push(options.addition);
          tail.push(options.additionSeparator)
      }

      tail.pop();
  }



  if (options.repeatTimes) {

    tail.push(options.separator);
    longTail = longTail.concat(tail);

      for (let i = 0; i < options.repeatTimes; i++) {
          result = result.concat(longTail);
      }
  
      result.pop();
      result = result.join('');
      return result;
  }
  
  if (!options.repeatTimes && !options.additionRepeatTimes) {
    tail.push(options.addition);
    result = tail.join('')
    return result;
    }
};
  
