/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1 , right = x ,ans = 0;
    while(left<=right){
        let mid = left + Math.floor((right-left)/2);
        if(mid*mid===x)
            return mid;
        else if(mid*mid<x){
            ans = mid;
            left = mid+1;
        }
        else 
            right =mid-1;
    }
    return ans;
};