/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let arr = s.split('').reverse();
    return arr.join('');
};