/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    strs.sort()
    
    let ans = strs[0].split('');
    
    for(let s of strs){
        for(let i=0;i<s.length;i++){
            if(s[i]!=ans[i]){
                ans.fill('',i);
            }
        }
    }
    
    
    
    return ans.join('');
};