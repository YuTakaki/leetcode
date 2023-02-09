function sortedSquares(nums: number[]): number[] {
    const sqrt_num = nums.map(num => num * num)
    
    return sqrt_num.sort((a, b) => a- b)

};