const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result = "";
  let count = 1;
  let strArr = str.split("");

  strArr.forEach((letter, index) => {
    if (letter === strArr[index + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        result += `${count}${letter}`;
      } else {
        result += letter;
      }
      count = 1;
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
