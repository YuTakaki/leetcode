/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // create a sorted array to store merge arrays
  while(m && n){
        let i = m + n - 1;
        if (nums1[m-1] > nums2[n-1]) {
            nums1[i] = nums1[m-1]
            m--;
        } else {
            nums1[i] = nums2[n-1]
            n--
        }
    }
    while(n){
        nums1[m + n - 1] = nums2[n-1];
        n--;
    }
}