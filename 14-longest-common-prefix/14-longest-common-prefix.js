/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let size = strs.length
    let end = strs[0].length;
    
    if(size==0) return ""
    if(size==1) return strs[0]
    let ans=""
    let i =0
    while(i<end&&strs[0][i]==strs[size-1][i])
        i++;
     ans = strs[0].substring(0, i);
    return ans;
};