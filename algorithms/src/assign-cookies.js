var findContentChildren = function(g, s) {
    let children = g.sort((a,b) => {return a-b});
    let cookie = s.sort((a,b) => {return a-b});
    let count = 0;
    let j = 0;
    for(let i=0;i<cookie.length;i++){
        if(cookie[i]>=children[j]){
            count += 1;
            j += 1;
            if(j>=children.length){
                break;
            }
        }
    }
    return count
};