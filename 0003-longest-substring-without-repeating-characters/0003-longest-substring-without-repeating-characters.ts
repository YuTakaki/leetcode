function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let left = 0;
    let right = 0;
    const cache = {}
    let i = 0
    while (right < s.length) {
        if(s[right] in cache) {
            left = Math.max(cache[s[right]], left)
        }
        cache[s[right]] = right + 1
        max = Math.max(cache[s[right]] - left, max)
        right++;
        
        
    }
    return max

};