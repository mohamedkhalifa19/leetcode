/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
let x =Math.log10(n)/Math.log10(3);
if(x-Math.floor(x)==0)
return true;
else
return false;
};