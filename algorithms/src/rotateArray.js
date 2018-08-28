/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i=0;i<k;i++){
        let a = nums.pop();
        nums.splice(0,0,a);
    }
};