/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let s = S.split('');
    let t = T.split('');
    let res1 = [];
    let res2 = [];
    for(let i=0;i<s.length;i++){
        if(s[i]!='#'){
            res1.push(s[i]);
        }else{
            res1.pop();
        }
    }
    for(let i=0;i<t.length;i++){
        if(t[i]!='#'){
            res2.push(t[i]);
        }else{
            res2.pop();
        }
    }
    let ans1 = res1.join('');
    let ans2 = res2.join('');
    if(ans1 == ans2){
        return true;
    }else{
        return false;
    }
};