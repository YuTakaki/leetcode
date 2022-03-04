/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    for (let i of s) {
        map[i] = map[i] + 1 || 1;
    }
    
    for (let x of t) {
        if(!(x in map) || map[x] === 0) return false;
        map[x] -= 1;
    }
    
    for (let y in map) {
        if(map[y] > 0) return false;
    }
    return true
    
};