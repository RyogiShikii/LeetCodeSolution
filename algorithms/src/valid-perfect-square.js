/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let a = Math.sqrt(num);
    let b = Math.round(a);
    return a==b? true : false
};