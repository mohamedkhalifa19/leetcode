/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let result = 0;
    let  i=1;
    let ans = 0
    while(result+i<=n){
        result+=i;
        i++;
        ans++;
    }
    return ans
};