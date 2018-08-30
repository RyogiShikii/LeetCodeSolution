/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    /*
    let buld = [];
    for(let i=0;i<n;i++){
        buld.push(false);
    }
    for(let x=1;x<=n;x++){
        for(let y=1;y<=n;y++){
            if(y%x==0){
                buld[y-1]=!buld[y-1];
            }
        }
    }
    let count = 0;
    for(let m=0;m<n;m++){
        if(buld[m]){
            count += 1;
        }
    }
    return count;
    This will cause TLE error
    The buld will stay 'on' only by toggled odd number times
    for example:
    the 6th buld will be toggled at 1th,2nd,3rd and 6th round and the status will be 'off' finally;
    the 9th buld will be toggled at 1th,3rd and 9th round and the status will be 'on';
    Therefore, the answer become calculating how many numbers(less than n) are composed by other number squire; 
    */
    
    return n>0? parseInt(Math.sqrt(n)) : 0;
    
};