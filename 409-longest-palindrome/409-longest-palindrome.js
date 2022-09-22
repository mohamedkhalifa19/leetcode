/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    const x = new Map();
    for(let str of s) {
        if(x.has(str)) 
        x.set(str,x.get(str)+1);
        else
        x.set(str,1);
    }
    let ans = 0;
  for(let i of x.values()){
   if(i>=2){
    if(i%2==0) ans+=i;
    else
    ans+= i -(i%2);
   }
  }
  if(s.length-ans!=0) 
  ans++
return ans;
};