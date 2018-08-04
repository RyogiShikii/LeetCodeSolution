/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res=[];
    for(let i=0;i<n;i++){
        if((i+1)%3==0){
            if((i+1)%5==0){
                res.push('FizzBuzz');
            }else{
                res.push('Fizz');
            }
        }else if((i+1)%5==0){
            res.push('Buzz');
        }else{
            res.push((i+1).toString());
        }
    }
    return res;
};