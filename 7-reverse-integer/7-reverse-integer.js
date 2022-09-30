/**
 * @param {number} x
 * @return {number}
 */
var maxValue = function(x,y){
if(x>=y) return x;
    return y;
}
var minValue = function(x,y){
if(x<=y) return x;
    return y;
}
var reverse = function(x) {
    let reverseNumber =0 , isNegative = false;
    if(x<0){
     isNegative = true;
        x*=-1;
    }
    while(x!=0){
        reverseNumber = (reverseNumber * 10)+x%10;
        x = Math.floor(x/10);
    }
    if(isNegative) reverseNumber*=-1;
    if(maxValue(reverseNumber,2**31-1) === reverseNumber ||        minValue(reverseNumber,-(2**31)) === reverseNumber)
        return 0;
return reverseNumber;
};