/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans =[];
    let str="";
     s=s+" ";
    for(let i=0;i<s.length;i++){
        if (s[i]==' '){
           str += " "+ans.reverse().join("");
            ans=[];
        }
        else
        ans.push(s[i]);
    }
    
    return str.trim('');
};