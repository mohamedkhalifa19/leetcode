/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
   let sum =0;
    for(let i=0;i<t.length;i++){
        sum+= (t.charCodeAt(i)-97);
    }
       for(let i=0;i<s.length;i++){
        sum-= (s.charCodeAt(i)-97);
    }
     
    return String.fromCharCode(sum+97);
     
}