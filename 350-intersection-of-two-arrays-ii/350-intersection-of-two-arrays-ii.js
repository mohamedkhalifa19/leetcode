/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var Intersection = function(nums1,nums2){
    let HashMap = new Map();
    for (let num of nums1){
        if(HashMap.has(num))
            HashMap.set(num,HashMap.get(num)+1);
        else
            HashMap.set(num,1);
    }
    let ans = [];
      for (let num of nums2){
        if(HashMap.has(num) && HashMap.get(num)>=1)
            ans.push(num);
          HashMap.set (num,HashMap.get(num)-1);
    }
    return ans;
}
var intersect = function(nums1, nums2) {
    if(nums1.length>=nums2.length)
        return Intersection(nums1,nums2);
    return Intersection (nums2,nums1);
};