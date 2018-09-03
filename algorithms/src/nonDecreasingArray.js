/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            if(i==0){
                nums[i]=nums[i+1];
                count-=1;
            }else if(nums[i-1]<nums[i+1]){
                nums[i]=nums[i-1];
                count-=1;
            }else{
                nums[i+1]=nums[i];
                count-=1;
            }
        }
    }
    if(count>=0){
        return true;
    }else{
        return false;
    }
};