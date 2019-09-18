/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    for(let i=0;i<s.length;i++){
        if(s.indexOf('A')==i && s.indexOf(s[i],i+1)!=-1){
            return false;
        }
        if(s[i]=='L' && s[i+1]=='L' && s[i+2]=='L'){
            return false;
        }
    }
    return true;
};