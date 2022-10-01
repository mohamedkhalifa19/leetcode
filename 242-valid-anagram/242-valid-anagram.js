/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let anagram =new Map();
    if (s.length>=t.length){
         for(let str of s){
        if(anagram.has(str)){
            anagram.set(str,anagram.get(str)+1)
        }
        else{
            anagram.set(str,1);
        }
    }
        for(let str of t){
            if(anagram.has(str)){
                if(anagram.get(str)>=1){
                    anagram.set(str,anagram.get(str)-1);
                }
                if(anagram.get(str)==0) {
                    anagram.delete(str);
                }
            }
        }
    }
   
else{
     for(let str of t){
        if(anagram.has(str)){
            anagram.set(str,anagram.get(str)+1)
        }
        else{
            anagram.set(str,1);
        }
    }
        for(let str of s){
            if(anagram.has(str)){
                if(anagram.get(str)>=1){
                    anagram.set(str,anagram.get(str)-1);
                }
                if(anagram.get(str)==0) {
                    anagram.delete(str);
                }
            }
        }
}
    return anagram.size===0;
};