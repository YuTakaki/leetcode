/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // create a sorted array to store merge arrays
  const nums1Copy: any[] = [...nums1];
  let index = 0;
  while (m > 0 && n > 0 && nums1Copy.length > 0 && nums2.length > 0) {
    if (nums1Copy[0] < nums2[0]) {
      nums1[index] = nums1Copy.shift();
      m--;
    } else {
      nums1[index] = nums2.shift()!;
      n--;
    }
    index++;
  }

  while (m > 0) {
    m--;
    nums1[index] = nums1Copy.shift();
    index++;
  }

  while (n > 0) {
    n--;
    nums1[index] = nums2.shift()!;
    index++;
  }
}