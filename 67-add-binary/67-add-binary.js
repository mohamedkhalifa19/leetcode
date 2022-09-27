/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let ans=[] , i=a.length-1 , j = b.length-1,carry=0;
  while(i>=0 || j>=0){
      let sum = carry;
      if(i>=0)
      sum+= (a[i]-'0');
      if(j>=0)
      sum+= (b[j]-'0');
      ans.push(sum%2);
      carry =Math.floor(sum/2);
      i--;
      j--;
  }
    if(carry!=0) 
   ans.push(carry);
    return ans.reverse().join('');
};