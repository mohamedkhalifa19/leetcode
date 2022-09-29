/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let x = new Map();
    for(let a of arr)
        x.set(a,true);
    let i=1,t=1;
    while(true){
        if(!x.has(i)){
            if(k===t)
                return i;
            t++;
        }
        
        i++;
    }
};