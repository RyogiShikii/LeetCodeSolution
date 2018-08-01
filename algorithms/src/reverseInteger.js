/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let symbol = '';
    let res='';
    let y=x.toString().split('');
    if(y[0]=='-'){
        symbol = y.shift();
        let m=y.reverse();
        m.unshift(symbol);
        let t=m.join('');
        return (parseInt(t)<-Math.pow(2,31) || parseInt(t)>Math.pow(2,31)-1)?0:parseInt(t);
    }else{
        let n=y.reverse().join('');
        return (parseInt(n)<-Math.pow(2,31) || parseInt(n)>Math.pow(2,31)-1)?0:parseInt(n);
    }
};