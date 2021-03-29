const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLinks : [],

  getLength() {

    return this.chainLinks.length;

  },
  addLink(value) {

    this.chainLinks.push(String(value));
    return this;

  },
  removeLink(position) {

    if (typeof position !== 'number') {
      this.chainLinks = [];
      throw new CustomError('Position is not a number');
    }

    if ((position - 1) > this.chainLinks.length || position < 0 || !((position ^ 0) === position)) {
      this.chainLinks = [];
      throw new CustomError('Position is invalid');
    }
    this.chainLinks.splice((position - 1) , 1);
    
    return this;

  },
  reverseChain() {

    this.chainLinks.reverse();
    return this;

  },
  finishChain() {

    let result = this.chainLinks.map(element => `( ${element} )`).join("~~");
    this.chainLinks = [];
    return result;
  }
};

module.exports = chainMaker;
