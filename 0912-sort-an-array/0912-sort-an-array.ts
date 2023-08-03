function sortArray(nums: number[]): number[] {
    for (let x = 1; x < nums.length; x++) {
        for (let y = x; y > 0; y--) {
            if (nums[y] >= nums[y-1]) break;
            const temp = nums[y]
            nums[y] = nums[y-1]
            nums[y-1] = temp
        }
    }
    return nums
};