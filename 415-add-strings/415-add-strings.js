/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
let i=num1.length-1 ,j=num2.length-1,carry=0,ans=[];
 while (i>=0 || j>=0) {
    let sum = carry;
    if (i >= 0)
        sum += (num1[i] - '0');
    if (j >= 0)
        sum += (num2[j] - '0');
    ans.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
}
if(carry != 0) ans.push(carry);

return ans.reverse().join('');
};