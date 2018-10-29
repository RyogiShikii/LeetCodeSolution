/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = Math.max(...nums);
    let max = n*(n+1)/2;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    if(max>sum){
        return max-sum;
    }else if(nums.length == n+1){
        return n+1;
    }else{
        return 0;
    }
};