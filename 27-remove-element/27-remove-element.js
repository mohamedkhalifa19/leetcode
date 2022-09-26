/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let slow=0 ,fast=0;
for(let i=0;i<nums.length;i++){
    nums[slow] = nums[fast];
    if(nums[slow]!=val) slow++;
    fast++;
}
    return slow;
};