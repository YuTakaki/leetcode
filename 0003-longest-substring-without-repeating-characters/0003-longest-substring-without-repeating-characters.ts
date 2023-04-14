function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    for (let x = 0; x < s.length; x++) {
        let count = 0;
        const cache = {}
        for (let y = x; y < s.length; y++) {
            if (s[y] in cache) break;
            cache[s[y]] = true
            count += 1
            
        }
        max = max > count ? max : count
        if (max === s.length) break;
    }
    return max

};