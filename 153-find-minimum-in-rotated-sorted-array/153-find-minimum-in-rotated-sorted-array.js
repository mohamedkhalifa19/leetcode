/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  nums.sort((x,y) =>{return x-y});
    return Math.min(...nums);
};