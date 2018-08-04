/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0;
    let sum= 0;
    while(count<n-sum){
        count++;
        sum+=count;
    }
    return count;
};