/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let answer = nums;
    let multiplication1 = 1;
    let multiplication2 =1;
    let zeroes= 0;
    for (let i = 0; i < nums.length; i++)
    {
    if (nums[i]!=0)
    multiplication2*=nums[i];
    else
    zeroes++;
    multiplication1*=nums[i];
    if(zeroes>1)
   return  answer.fill(0,0,nums.length);
    }
    multiplication1 = Math.min(Math.max(-(2**31-1),multiplication1),2**31);
    multiplication2 = Math.min(Math.max(-(2**31-1),multiplication2),2**31);
    for (let i = 0; i < nums.length; i++)
    {
    if (nums[i] !=0){
    if(multiplication1==0)
    answer[i]=0;
    else
    answer[i] = multiplication1/nums[i];
    }
   
    else
    answer[i] = multiplication2;
    }
    return answer;
};
