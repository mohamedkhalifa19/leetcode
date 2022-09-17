/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
s =s.trim();
let ans="0";
let Positve = false , negative = false;
    if (s[0] == '-')
        negative = true;
    else if (s[0]== '+')
        Positve = true;
        else if (s[0]-'0'>=0 && s[0]-'0'<=9 && s[0]!='-' && s[0]!='+')
        ans=s[0];
    else 
        return ans;
for(let i =1;i<s.length;i++){
    if(s[i]==' ')
        break;
    let x =s[i]-'0';
    if(x>=0 && x<=9)
    ans+=String(x);
    else{
        break;
    }
}
ans = Number(ans);
if (negative)
    ans*=-1;
return Math.min(Math.max(-(2**31),ans),(2**31 -1));
};
