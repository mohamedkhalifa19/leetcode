/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const Numbers =new Map();
  for(let num of nums) {
    if (!Numbers.has(num))
     Numbers.set(num,1)
    else
     return true;
  }
     return false;
};