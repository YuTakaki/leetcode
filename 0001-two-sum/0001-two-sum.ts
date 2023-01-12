function twoSum(nums: number[], target: number): number[] {
    const hash = {} // create a hash object
    let result : number[] = []
    for (let i = 0; i < nums.length; i++) { // iterate through the nums
        const num = nums[i]
        //subtract target and num and find the diff in the hashmap
        const diff = target - num 
        if (diff in hash) {
            result = [i, hash[diff]]
            break
        }
        hash[num] = i
    }
    return result
};