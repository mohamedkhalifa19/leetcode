/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
 let left = 0 ,right =arr.length-1,missing =0;
    while (left<=right){
        let mid = Math.floor((right+left)/2);
        if(arr[mid]-(mid+1)<k){
            missing = mid+1;
            left =mid+1;
        }
        else 
            right = mid-1;
    }
    return missing + k;
};