/**
 * @param {number} n
 * @return {number}
 */
var sum_From_One_To_N = function(n){
    return (n*(n+1))/2;
}
var arrangeCoins = function(n) {
  let left = 1 , right = n , mid =0;
   while (left<=right){
       mid = Math.floor((right+left)/2);
       if(sum_From_One_To_N(mid)<=n)
           left = mid+1;
       else
           right = mid-1;
       if(sum_From_One_To_N(mid)===n) return mid; 
   }
    return right;
};