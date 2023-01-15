/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // start with the last number of the arrays and compare
  // put the numbers in the corresponding places

  while (n && m) {
    const index: number = m + n - 1;
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }
  }

  while (n) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
}