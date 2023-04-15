// function generateParenthesis(n: number): string[] {
//     const output: string[] = []
//     const generate = (str: string = "", open: number = 0, close: number= 0) => {
//         if (str.length >= (n * 2)) {
//             output.push(str)
//         }
        
//         if (open < n) {
//             generate(str+"(", open + 1, close)
//         }
        
//         if (close < open) {
//             generate(str+")", open, close + 1)
//         }
//     }
    
//     generate()
    
//     return output
    

// };



function generateParenthesis(n: number, output = [], str: string = "", open: number = 0, close: number= 0): string[] {
    if (str.length >= (n * 2)) {
        output.push(str)
    }

    if (open < n) {
        generateParenthesis(n, output, str+"(", open + 1, close)
    }

    if (close < open) {
        generateParenthesis(n, output, str+")", open, close + 1)
    }
    
    return output
    

};