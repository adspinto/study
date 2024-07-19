function matchingBrackets(string) {
    let openings = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    };
    let closings = [")", "}", "]"];
    let bracketStack = [];

    string.split("").map(item => {
        if (openings[item]) {
            bracketStack.push(item)
        } else if (closings.includes(item)) {
            if (    bracketStack.length ==  0 || openings[bracketStack.pop()] !== item) {
                return false
            }
        }
    })
    return bracketStack.length === 0;
}

console.log(matchingBrackets("[({())]"))


