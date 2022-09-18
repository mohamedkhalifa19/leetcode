/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let ans=[];
    for (let i = 0; i < s.length; i++) {
    if(s[i]=='(' || s[i]=='{' || s[i]=='[')
     ans.push(s[i]);
    else{
      if (s[i]==')' && ans[ans.length-1]=='(')
       ans.pop();
      else if (s[i]==']' && ans[ans.length-1]=='[')
       ans.pop();
      else if (s[i]=='}' && ans[ans.length-1]=='{')
       ans.pop();
       else
       ans.push(s[i]);
    }
}
return (ans.length==0);
};