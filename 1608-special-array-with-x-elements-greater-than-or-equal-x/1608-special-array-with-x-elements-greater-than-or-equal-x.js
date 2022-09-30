/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    let  i =0,ans;
    while(i<=nums.length) {
        ans  = 0;
        for (let num of nums){
            if(i<=num) ans++;
        }
        
        if(i==ans)
          return i;
            i++;
    }
    return -1;
};
