/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let s = new Set(nums);
    if(s.size!=nums.length){
        return true;
    }else{
        return false;
    }
};

/*ES5
var containsDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        let j=i+1;
        while(j<nums.length){
            if(nums[i]==nums[j]){
                return true;
            }
            j++;
        }
    }
    return false;
};

 */