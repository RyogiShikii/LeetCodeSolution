/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

/*
var removeKdigits = function(num, k) {
    if(num.length<=k){
        return '0';
    }
    let count = 0;
    let arr = num.split('').map(item=>parseInt(item));
    for(let i=0;i<arr.length-1;i++){
        if(count<k && arr[i]>arr[i+1]){
            delete arr[i];
            count=count+1;
        }
    }
    if(count==k){
        return parseInt(arr.join('')).toString();
    }else{
        arr.sort((a,b)=>a-b);
        arr.splice(arr.length-k,k);
        return parseInt(arr.join('')).toString();
    }
};
*/
var removeKdigits = function(num, k) {
    let stack = [];
    let len = num.length;
  
    for (let i = 0; i < len; i++) {
      let item = num[i];
      if (i==0){
          stack.push(item)
      }else {
        while (item < stack[stack.length - 1] && (len - i) + (stack.length - 1) >= len - k){  // make sure that there are len - k items at least
            stack.pop();
        }
        stack.push(item);
      }
    }
  
    // remove redundant items
    while (stack.length > len - k)
      stack.pop();
  
    let str = stack.join('');
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '0')
        return str.substring(i);
    }
  
    return '0';
  };
  