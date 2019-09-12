/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str = num.toString(2);
    let ans = ''
    for(let i=0;i<str.length;i++){
        if(str[i]=='1'){
            ans += '0'
        }else{
            ans += '1'
        }
    }
    return parseInt(ans,2)
};