/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num <= 0 ) return false;
    while(num>0 && num%4==0){
        num = parseInt(num/4);
    }

    return num==1 ;
};