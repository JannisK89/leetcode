/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Solution without .reverse
var reverseString = function (s) {
  let last = '';

  for (let i = 0; i < s.length/2 ; i++) {
    last = s[s.length -i - 1];
    s[s.length -i -1] = s[i];
    s[i] = last;
  }
};

// Solution using .reverse
var reverseStringArrayFunc = function (s) {
    s.reverse()
};