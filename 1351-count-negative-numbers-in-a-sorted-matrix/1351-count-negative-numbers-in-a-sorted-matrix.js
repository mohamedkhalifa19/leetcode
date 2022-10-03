/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    var negative =0;
    for (var i = 0 ; i< grid.length;i++){
        for (var j= 0;j<grid[i].length;j++){
            if (grid[i][j]<0) negative++;
        }
    }
    return negative ;
};