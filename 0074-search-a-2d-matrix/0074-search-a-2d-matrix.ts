function searchMatrix(matrix: number[][], target: number): boolean {
    let top = 0
    let bottom = matrix.length - 1
    
    let l = 0
    let r = matrix[0].length - 1
    
    while(top <= bottom) {
        const pivot = Math.ceil((top + bottom) / 2)
        console.log(pivot)
        if (target < matrix[pivot][0]) {
            bottom = pivot - 1
        } else if (target > matrix[pivot][matrix[0].length - 1]) {
            top = pivot + 1
        } else {
            break
        }
        console.log(top, bottom)
    }
    
    
    
    if (top > bottom) return false
    
    const index = Math.ceil((top + bottom) / 2)
    
    while (l <= r) {
        const pivot = Math.ceil((l + r) / 2)
        if (target < matrix[index][pivot]) {
            r = pivot - 1
        } else if (target > matrix[index][pivot]) {
            l = pivot + 1 
        } else {
            return true
        }
    }
    return false

};