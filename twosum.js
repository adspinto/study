nums = [2, 7, 11, 15]
let t = []
let target = 9
const f = {}
for(let i = 0; i < nums.length; i++) {
    if (target - nums[i] in f) {
        t.push(i)
        t.push(f[target - nums[i]])
    }
    f[nums[i]] = i
}

console.log(t)
console.log(f) 