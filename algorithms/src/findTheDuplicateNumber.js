/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let res = [];
    for(let i=0;i<nums.length;i++){
        if(res.indexOf(nums[i])==-1){
            res.push(nums[i]);
        }else{
            return nums[i];
        }
    }
};