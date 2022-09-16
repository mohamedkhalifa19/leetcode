/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let ans = (nums.length * nums.length +nums.length)/2;

    for(let i=0;i<nums.length;i++){
        ans-=nums[i];
    }
  
   return ans;

};