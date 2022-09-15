/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
nums = nums.sort((x,y)=>x-y);

const results =new Map();


for(let i=0;i<nums.length;i++){
  results.set(i,nums[i])
}
    let count =0;
    for(let i=0;i<=nums.length;i++){
      if(results.get(i)!=count)
      return count;
      count++;
      }
   

};