/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let sum = 0;
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            sum = sum + 1;
            arr.push(sum)
        }else{
            sum = 0;
            arr.push(sum);
        }
    }
    return Math.max(...arr);
};