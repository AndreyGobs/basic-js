const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr !== 'object') {

    throw new CustomError('Not implemented');
  }


  let transformArr = [];
  
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] == '--double-next') {
      
      if (arr.indexOf('--double-next') == arr.length - 1) {
        continue;
    }

    transformArr.push(arr[i+1]);

  } else if (arr[i] == '--double-prev') {

    if (arr.indexOf('--double-prev') == 0) {
        continue;
    }

    transformArr.push(arr[i-1]);

    if (transformArr.indexOf(transformArr.length - 1) == transformArr.indexOf(transformArr.length - 2)) {
        continue;
    }

    transformArr.push(arr[i-1]);

  } else if (arr[i] == '--discard-prev') {

    transformArr.pop();

  } else if (arr[i] == '--discard-next') {

    if (arr.indexOf('--discars-next') == arr.length - 1) {
        return;
    }

      i = i + 2;

  } else {

      transformArr.push(arr[i])

  }

}

return transformArr;
};
