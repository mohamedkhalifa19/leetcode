/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let maxx_num = Math.max(...arr)
    
//     let left = 0 , right = arr.length-1;
    
//     while(left<=right){
//         let mid = Math.floor((left+right/2))
        
//         if (arr[mid])
//     }
    
    return arr.indexOf(maxx_num)
};