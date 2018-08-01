/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var buffer=0;
    var res=0;
    if(s.indexOf('IV')!=-1)buffer+=-2;
    if(s.indexOf('IX')!=-1)buffer+=-2;
    if(s.indexOf('XL')!=-1)buffer+=-20;
    if(s.indexOf('XC')!=-1)buffer+=-20;
    if(s.indexOf('CD')!=-1)buffer+=-200;
    if(s.indexOf('CM')!=-1)buffer+=-200;
    var a=s.split('');
    a.forEach(item=>{
        if(item=='I'){
            res+=1;
        }else if(item=='V'){
            res+=5;
        }else if(item=='X'){
            res+=10;
        }else if(item=='L'){
            res+=50;
        }else if(item=='C'){
            res+=100;
        }else if(item=='D'){
            res+=500;
        }else if(item=='M'){
            res+=1000;
        }
    });
    return res+buffer;
};