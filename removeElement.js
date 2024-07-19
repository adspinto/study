/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 *# plan
 I have to Remove val from nums 
 reorder the list to start with the values that are not val
 */
var removeElement = function (nums, val) {
  index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index += 1;
    }
  }

  return index;
};

let n = [0, 1, 2, 2, 3, 0, 4, 2]; //[3, 2, 2, 3];
let v = 2; //3;
removeElement(n, v);
