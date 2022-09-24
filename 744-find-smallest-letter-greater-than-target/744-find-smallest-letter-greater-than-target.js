/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target =='z' && letters.includes('a'))
        return 'a'
    let left = 0 , right = letters.length-1 ,ans = letters[0];
       while (left<=right){
           let mid = left + Math.floor((right-left)/2);
           if (letters[mid]>target) {
               ans =letters[mid]
               right  =mid-1
           }
           else
               left = mid+1
       }
    return ans
};