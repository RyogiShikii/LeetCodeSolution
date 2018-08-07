/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!=-1){
        return nums.indexOf(target);
    }else{
        nums.push(target);
        const s=nums.sort((a,b)=>a-b);
        return s.indexOf(target);
    }
};