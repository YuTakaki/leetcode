function isValid(s: string): boolean {
    const chars = []
    let charsMap = {
        ")": "(",
        "}": "{",
        "]": "[" 
    }
    
    for (let c of s) {
        if(!(c in charsMap)) {
            chars.push(c)
        } else {
            const openingChar = chars.pop()
            if (charsMap[c] !== openingChar) {
                console.log(chars, c, openingChar)
                return false
            }
        } 
    }
    
    return chars.length === 0

};