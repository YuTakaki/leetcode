function containsDuplicate(nums: number[]): boolean {
    // create a hash map
    const hash = {};
    
    // loop through the array and check if the num exist in the hash map
    for (let num of nums) {
        if (num in hash) {
            return true;
        }
        hash[num] = true;  
    }
    return false;

};