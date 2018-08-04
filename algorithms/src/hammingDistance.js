/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var m=x^y;
    var count=0;
    var n=m.toString(2).split('');
    for(let i of n){
        if(i==1){
            count+=1
        }
    }
    return count;
};