/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let store = 0
    let changed = []
    for(let i =0; i < nums.length; i++) {
      if(nums[store] == nums[i]){
        console.log(nums[store])
        store = nums[i]
        if(!changed.includes(nums[i])) {
            changed.push(nums[i])
        }
        
      }
    }
    console.log(nums, changed)
    return store
};