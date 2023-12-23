const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = n.toString();
  let possibleNumbers = nStr
    .split("")
    .map((element, index) =>
      parseInt(nStr.slice(0, index) + nStr.slice(index + 1))
    );
  // let possibleNumbers = nStr.split("").map((_, index) => {
  //   return parseInt(nStr.slice(0, index) + nStr.slice(index + 1));
  // });
  return Math.max(...possibleNumbers);
}

module.exports = {
  deleteDigit,
};
