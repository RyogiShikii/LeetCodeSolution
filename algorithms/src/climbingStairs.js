/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = [];
    res[0]=0;
    res[1]=1;
    res[2]=2;
    for(let i=3;i<=n;i++){
        res[i]=res[i-1]+res[i-2]
    }
    return res[n]
};