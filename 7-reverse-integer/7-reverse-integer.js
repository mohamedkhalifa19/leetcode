/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseNumber =0 , isNegative = false;
    if(x<0) isNegative = true;
    x = Math.abs(x);
    while(x!=0){
        reverseNumber = (reverseNumber * 10)+Math.abs(x%10);
        x = Math.floor(x/10);
    }
    if(isNegative) reverseNumber*=-1;
    if(Math.max(reverseNumber,2**31-1) === reverseNumber ||        Math.min(reverseNumber,-(2**31)) === reverseNumber)
        return 0;
return reverseNumber;
};