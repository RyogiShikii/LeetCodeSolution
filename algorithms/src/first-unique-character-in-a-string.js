/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split('');
    for(let i=0;i<arr.length;i++){
        let current = arr.splice(i,1);
        if(arr.indexOf(current[0])==-1){
            return i;
        }
        arr.splice(i,0,current[0]);
    }
    return -1;
};