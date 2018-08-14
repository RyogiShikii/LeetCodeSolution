/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index=[];
    let len = nums.length;
    for(let i =0;i<len;i++){
        if(nums[i]==0){
            nums.push(0);
            index.push(i)
        }
    }
    for(let j=0;j<index.length;j++){
        nums.splice(index[j]-j,1);
    }
};