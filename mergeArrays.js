/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let store = 0;
//   for (let i = 0; i < m + n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (nums1[i + j] > nums2[j]) {
//         console.log(nums1[i+j])
//         store = nums1[i + j];
//         nums1[i + j] = nums2[j];
//         nums2[j] = store;
//       }
//     }
//     console.log(nums1, nums2)
//   }

//   for (let x = 0; x < m + n; x++) {
//     if (nums1[m + x] !== undefined) {
//       nums1[m + x] = nums2[x];
//     }

//     if (nums1[x] > nums1[x + 1] && nums1[x+ 1] > 0) {
//       store = nums1[x];
//       nums1[x] = nums1[x + 1];
//       nums1[x + 1] = store;
//     }
//   }
//   // console.log(nums1);
// };

var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i <n; i++) {
    nums1[i+m] = nums2[i]
  }
  nuu
  console.log(nums1)
};
let first = [1, 5, 8, 0, 0, 0, 0, 0];
let n1 = 3;
let second = [-1, 2, 2, 4, 6];
//[-1, 1, 2, 2, 4, 5, 6, 8]
let n2 = 5;

merge(first, n1, second, n2);
