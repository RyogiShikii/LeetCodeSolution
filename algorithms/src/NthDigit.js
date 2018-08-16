/**
 * @param {number} n
 * @return {number}
 */

/*
9*1*1                0~9
9*2*Math.pow(10,1)   10~99
9*3*Math.pow(10,2)   100~999
...
*/

var findNthDigit = function(n) {
    let sum = 0;
    let count = 1;//the length of number. for 10-99 the count is 2; for 100-999 the count is 3
    if(n<=9){
        return n;
    }else{
        while(n>sum){
            sum=sum+9*count*Math.pow(10,count-1);
            count++;
        }
        let res = n-(sum-9*(count-1)*Math.pow(10,count-2));
        if(res%(count-1)==0){
            let ans = Math.pow(10,count-2) + res/(count-1) - 1;
            let a=ans.toString().split('');
            return parseInt(a.pop());
        }else{
            let remain = res%(count-1);
            let ans = Math.pow(10,count-2) + parseInt(res/(count-1));
            let a =ans.toString().split('');
            return parseInt(a[remain-1]);
        }
    }
};