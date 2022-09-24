/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let ans , left =  0 ,right = arr.length-1;
    
    while (left<=right){
        let mid = Math.floor((left+right)/2);
        if (arr[mid]<=arr[mid+1]){
            ans = mid+1;
            left = mid+1;
        }
        else
            right = mid-1
    }
    
    return ans
};