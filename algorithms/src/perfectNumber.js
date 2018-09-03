/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num<=0) return false;
    let nums = [];
    for(let i=1;i<=num;i++){
        if(num%i==0){
            nums.push(i);
        }
    }
    let sum = 0;
    for(let j=0;j<nums.length;j++){
        sum+=nums[j];
    }
    let res = sum-num;
    return res==num? true:false;
};