/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    let arr = sentence.split(' ');
    for(let i=0;i<arr.length;i++){
        let tem = arr[i];
        for(let j=0;j<dict.length;j++){
            if(arr[i].indexOf(dict[j])==0){
                if(tem.length > dict[j].length){
                    tem = dict[j];
                }
            }
        }
        arr[i] = tem;
    }
    return arr.join(' ');
};