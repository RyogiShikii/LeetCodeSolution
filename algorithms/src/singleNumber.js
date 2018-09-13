/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = {};
    for(let i=0;i<nums.length;i++){
        if(res[nums[i]]){
            res[nums[i]]+=1;
        }else{
            res[nums[i]]=1;
        }
    }
    for(let j=0;j<nums.length;j++){
        if(res[nums[j]]==1){
            return nums[j];
        }
    }
};