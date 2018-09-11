/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let len = arr.length;
    let res = '';
    for(let i=0;i<len;i++){
        let a = arr[i].split('').reverse();
        let b = a.join('');
        if(i<len-1){
            res = res+b+' ';
        }else{
            res = res+b;
        }
    }
    return res;
};