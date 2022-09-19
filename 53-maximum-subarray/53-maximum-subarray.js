/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current_sum= nums[0], maxx_sum = nums[0];
    for(let i=1;i<nums.length;i++){
        current_sum = Math.max(current_sum+nums[i],nums[i]);
        maxx_sum =  Math.max(maxx_sum,current_sum);
    }
    return maxx_sum;
};