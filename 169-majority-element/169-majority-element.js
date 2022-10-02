/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = new Map();
    for (let num of nums){
        if (!majority.has(num))
            majority.set(num,1);
        else
            majority.set(num,majority.get(num)+1);
    }
    
    for (let num of majority.keys())
        {
            if (majority.get(num)>Math.floor(nums.length/2))
                return num;
        }
};