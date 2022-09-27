/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var firstIndex = function(nums, target){
    let start = 0 ,end =nums.length-1,index=-1;
    while(start<=end){
        let m = Math.floor((start+end)/2);
        if(nums[m]>=target) 
            end = m-1;
        else
            start = m+1;
        if(nums[m]==target) index = m;
    }
    return index;
}
var lastIndex = function(nums, target){
    let start = 0,end =nums.length-1,index=-1;
    while(start<=end){
        let m = Math.floor((start+end)/2);
        if(nums[m]<=target) 
            start = m+1;
        else
            end = m-1;
        if(nums[m]==target) index = m;
    }
    return index;
}
var searchRange = function(nums, target) {
    let ans =[firstIndex(nums, target),lastIndex(nums, target)];
    return ans;
};

