function isValid(s: string): boolean {
    const chars = []
    let charsMap = {
        ")": "(",
        "}": "{",
        "]": "[" 
    }
    
    for (let c of s) {
        if(c in charsMap) {
            const openingChar = chars.pop()
            if (charsMap[c] !== openingChar) {
                return false
            }
        } else {
            chars.push(c)   
        }
    }
    
    return chars.length === 0

};