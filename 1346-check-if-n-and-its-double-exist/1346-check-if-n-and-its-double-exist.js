/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
   
    for (var i=0 ; i<arr.length-1 ; i++){
        for(var j =i+1 ; j<arr.length;j++){
            if (2*arr[i]==arr[j] || arr[i] == 2*arr[j]) return true;
        }
    }
    return false;
};