/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let a = [...nums]
    for(let i=0;i<a.length;i++){
        a.splice(i,1);
        let sum = 1;
        for(let j=0;j<a.length;j++){
            sum=sum*a[j];
        }
        res.push(sum);
        a.splice(i,0,nums[i]);
    }
    return res;
};