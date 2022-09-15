/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
// sort array elements
    
nums = nums.sort((x,y)=>x-y);

const results =new Map();

// create map to contain array elements 
for(let i=0;i<nums.length;i++){
  results.set(i,nums[i])
}
    // counter to check if all numbers in range [0,n] is found or not
  
    let count =0;
    
    for(let i=0;i<=nums.length;i++){
      if(results.get(i)!=count) // if number is not found 
      return count; // return missing number
      count++;
      }
   

};