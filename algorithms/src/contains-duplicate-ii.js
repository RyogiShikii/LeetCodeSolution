/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        let j = 1;
        while(j<=k){
            if(nums[i] == nums[i+j]){
                return true
            }
            j++;
        }
    }
    return false;
};