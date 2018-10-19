/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length==1){
        return 0;
    }
    if(nums.length==2){
        if(nums[0]>nums[1]){
            return 0;
        }else{
            return 1;
        }
    }
    let ans;
    for(let i=0;i<nums.length;i++){
        if(i==0 && nums[i]>nums[i+1]){
            ans=i;
        }else if(nums[i]>nums[i-1] && nums[i]>nums[i+1]){
            ans=i;
        }else if(i==nums.length-1 && nums[nums.length-1]>nums[i-1]){
            ans=i;
        }
    }
    return ans;
};