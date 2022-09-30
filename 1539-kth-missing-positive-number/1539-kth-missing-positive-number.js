/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    for (let a of arr){
        if(a<=k) k++;
        else 
            break;
    }
    return k;
};