/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
/*
Idea:
sumA-a+b = sumB-b+a

*/

var fairCandySwap = function(A, B) {
    let sumA = 0;
    let sumB = 0;
    for(let i=0;i<A.length;i++){
        sumA += A[i];
    }
    for(let j=0;j<B.length;j++){
        sumB += B[j];
    }
    for(let x=0;x<A.length;x++){
        let b = (sumB-sumA)/2+A[x];
        if(B.indexOf(b)!=-1){
            return [A[x],b]
        }
    }
};