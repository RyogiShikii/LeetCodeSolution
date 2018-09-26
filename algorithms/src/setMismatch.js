/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = {};
    let a,b;
    for(let i=0;i<nums.length;i++){
        if(res[nums[i]]){
            res[nums[i]]+=1;
        }else{
            res[nums[i]]=1;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(res[nums[i]]!=1){
            a=nums[i];
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(i+1)==-1){
            b=i+1;
        }
    }
    return [a,b]
    
};

/*
what a stupid way...sign...
*/