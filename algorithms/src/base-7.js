/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let res = [];
    let a = num;
    let x = -num;
    if(num==0) return '0';
    if(num>0){
        while(a>=7){
            let b = a%7;
            res.unshift(b);
            a = parseInt(a/7);
        }
        res.unshift(a);
    }else{
        while(x>=7){
            let b = x%7;
            res.unshift(b);
            x = parseInt(x/7);
        }
        res.unshift(x);
        res.unshift('-')
    }
    return res.join('');
};