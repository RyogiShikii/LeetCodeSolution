/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr1 = [...s];
    let arr2 = [...t];
    if(arr1.length!=arr2.length) return false;
    let res1 = arr1.sort();
    let res2 = arr2.sort();
    for(let i=0;i<res2.length;i++){
        if(res1[i]!=res2[i]){
            return false;
        }
    }
    return true;
};