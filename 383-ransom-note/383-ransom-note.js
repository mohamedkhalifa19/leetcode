/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    
    let ransomNote_len = ransomNote.length;
    let magazine_len = magazine.length;
    
    for(let str of ransomNote){
        let index = magazine.indexOf(str)
        if(index!=-1)
       magazine = magazine.replace(magazine[index],'');
    }
    
return (magazine.length+ransomNote_len===magazine_len)
};