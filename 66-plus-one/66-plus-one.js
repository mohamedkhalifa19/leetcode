/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0 ,i =digits.length-1;
   while(i>=0){
       let sum = ((digits[i]-'0')+1);
       digits[i]=sum%10;
       carry =Math.floor(sum/10);
       if(carry===0) break;
       i--;
   }
    if(carry===1)
        digits.unshift(carry) 
    return digits;
};