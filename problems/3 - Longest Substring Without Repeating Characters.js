/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;
  let TemporarySubstring = "";
  let char;
  let indexOfChar;
  for (let i = 0; i < s.length; i += 1) {
    char = s.charAt(i);
    indexOfChar = TemporarySubstring.indexOf(char);
    if (indexOfChar !== -1) {
      TemporarySubstring = TemporarySubstring.substr(indexOfChar + 1);
    }
    TemporarySubstring += char;
    longestLength = Math.max(longestLength, TemporarySubstring.length);
  }
  return longestLength;
};
