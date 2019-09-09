/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let ans = [9,1,2,3,4,5,6,7,8];
    if(num > 9){
        return ans[(num%9)]
    }
    return num;
};