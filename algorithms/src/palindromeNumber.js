/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseNumber = x.toString().split('').reverse().join('');
    let originalNumber = x.toString();
    if(reverseNumber == originalNumber){
        return true;
    }
    return false;
};