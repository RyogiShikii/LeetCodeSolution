/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0;
    let max = 1;
    for(let i=0;i<s.length-1;i++){
        let str = s[i];
        for(let j=i+1;j<s.length;j++){
            if(str.indexOf(s[j])==-1){
                str += s[j];
                //console.log(str)
            }else{
                max = max>str.length? max:str.length;
                break;
            }
        }
        max = max>str.length? max:str.length;
    }
    return max
};