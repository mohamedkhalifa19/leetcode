/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.push(target);
    nums = nums.sort((x,y)=>{return x-y});
    return nums.indexOf(target);
};