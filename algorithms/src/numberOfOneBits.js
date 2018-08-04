/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var sum=0;
    var m=n.toString(2);
    var v=m.split('');
    for(var i=0;i<m.length;i++){
        if(m[i]==1){
            sum=sum+1;
        }
    }
    return sum;
};