/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let current_max = 1 , current_min =1;
    let ans = Math.max(...nums);
    for(let num of nums){
        if(num==0) {
            current_max = 1 , current_min =1;
            continue;
        }
  let temp = current_max*num
  current_max = Math.max(current_max*num,current_min*num,num);
  current_min = Math.min(temp,current_min*num,num);    
  ans = Math.max(ans,current_max) 
    }
    return ans;
};