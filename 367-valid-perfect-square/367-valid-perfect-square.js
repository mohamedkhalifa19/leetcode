/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0 , right = Math.floor(num/2);
    if(num==0||num==1) return true;
    while(left<=right){
        let m= left + Math.floor((right-left)/2)
        if(m*m == num) return true;
        else if(m*m>num) right = m-1;
        else 
            left = m+1;
    }
    return false
};