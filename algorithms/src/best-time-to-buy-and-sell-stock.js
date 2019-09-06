/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let current = 0;
    let max = 0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<prices[j]){
                current = prices[j]-prices[i];
                max = Math.max(max,current)
            }
        }
    }
    return max;
};