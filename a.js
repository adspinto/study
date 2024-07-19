/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let nums1 = [];
var merge = function (nums1, m, nums2, n) {
  let store = 0;
  for (let i = 0; i < n; ++i) {
    nums1[m + i] = nums2[i];
  }
  //   console.log(nums1)
  for (let i = 0; i < n; ++i) {
    console.log(nums1[i]);
    if (nums1[i] > nums1[i + 1]) {
      console.log(nums1[i], nums1[i + 1]);
      store = nums1[i];
      nums1[i] = nums1[i + 1];
      if (store !== 0) {
        nums1[i + 1] = store;
        store = 0;
      }
    }
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
