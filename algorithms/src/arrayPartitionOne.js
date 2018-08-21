/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let arr = nums.sort((a,b)=>a-b);
    let sum = 0;
    for(let i=0;i<arr.length;i=i+2){
        sum = sum + arr[i];
    }
    return sum;
};