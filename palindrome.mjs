var isPalindrome = function(x) {
    const a = x.toString().split("")
    const sign = a[0]
    const reversed = a.reverse().filter(item => !isNaN(parseInt(item))).join("")
    if (isNaN(parseInt(sign))) {
        return reversed == x
    }
    return x == reversed
};


console.log(isPalindrome(-121))