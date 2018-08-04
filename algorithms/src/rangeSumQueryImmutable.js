/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.res=[];
    var sum=0;
    for(var m=0;m<nums.length;m++){
        sum+=nums[m];
        this.res.push(sum);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i==0){
        return this.res[j];
    }
    return this.res[j]-this.res[i-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */