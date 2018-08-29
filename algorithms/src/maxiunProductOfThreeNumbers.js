/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let arr = nums.sort((a,b)=>a-b);
    let len = arr.length;
    let max1 = arr[len-1]*arr[len-2]*arr[len-3]; //all positive or all negative numbers
    let max2 = arr[0]*arr[1]*arr[len-1];//both positive and negative
    return Math.max(max1,max2);
};