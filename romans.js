/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mixed = ["IV", "IX", "XL", "XC", "CD", "CM"];
  const romans = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const f = [];
  const a = Object.keys(romans).map((item) => {
    const b = s.split(item);
    f.push(b);
  });
  // const t = a.reduce((acc, value) => {
  //     const parsed = romans[value]
  //     const parsed_acc = typeof acc == "string" ? romans[acc] : acc
  //     // console.log(value, acc, parsed, parsed_acc)
  //     return parsed_acc + parseInt(parsed)
  // })
  // return t
  return f;
};

console.log(romanToInt("MCMXCIV"));
