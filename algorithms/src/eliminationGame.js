/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    /*Time limit Exceeded by this solution
    let nums = [];
    for(let i=1;i<=n;i++){
        nums.push(i);
    }
    while(nums.length>1){
        let len=nums.length;
        for(let k=0;k<len/2;k++){
            nums.splice(k,1);
        }
        nums.reverse();
    }
    return nums[0];
    */

    
    /*
    For each time is eliminates, it is important to find out the start number.
    And every time it eliminates, the difference(I call it space in code) between numbers will be double.
    If the elimination is forward, the next start number will be the current one + current space.
    If the elimination is backward and the number of remains is odd,then next start=current start+current space.
    If the elimination is backward and the number of remains is even, the next start = current start.
    */
    let space=1;
    let remain = n;
    let start = 1;
    let isForward =true;
    while(remain>1){
        if(isForward || remain%2!=0){
            start = start + space;
        }
        remain = parseInt(remain/2);
        space = space*2;
        isForward = !isForward;
    }
    return start;
};