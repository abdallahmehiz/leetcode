/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let arabicNumeral = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "M":
        arabicNumeral += 1000;
        for (let j = i - 1; j >= 0; j--) {
          switch (s[j]) {
            case "D":
              arabicNumeral -= 2 * 500;
              break;
            case "C":
              arabicNumeral -= 2 * 100;
              break;
            case "L":
              arabicNumeral -= 2 * 50;
              break;
            case "X":
              arabicNumeral -= 2 * 10;
              break;
            case "V":
              arabicNumeral -= 2 * 5;
              break;
            case "I":
              arabicNumeral -= 2 * 1;
              break;
          }
        }
        break;
      case "D":
        arabicNumeral += 500;
        for (let j = i - 1; j >= 0; j--) {
          switch (s[j]) {
            case "C":
              arabicNumeral -= 2 * 100;
              break;
            case "L":
              arabicNumeral -= 2 * 50;
              break;
            case "X":
              arabicNumeral -= 2 * 10;
              break;
            case "V":
              arabicNumeral -= 2 * 5;
              break;
            case "I":
              arabicNumeral -= 2 * 1;
              break;
          }
        }
        break;
      case "C":
        arabicNumeral += 100;
        for (let j = i - 1; j >= 0; j--) {
          switch (s[j]) {
            case "L":
              arabicNumeral -= 2 * 50;
              break;
            case "X":
              arabicNumeral -= 2 * 10;
              break;
            case "V":
              arabicNumeral -= 2 * 5;
              break;
            case "I":
              arabicNumeral -= 2 * 1;
              break;
          }
        }
        break;
      case "L":
        arabicNumeral += 50;
        for (let j = i - 1; j >= 0; j--) {
          switch (s[j]) {
            case "X":
              arabicNumeral -= 2 * 10;
              break;
            case "V":
              arabicNumeral -= 2 * 5;
              break;
            case "I":
              arabicNumeral -= 2 * 1;
              break;
          }
        }
        break;
      case "X":
        arabicNumeral += 10;
        for (let j = i - 1; j >= 0; j--) {
          switch (s[j]) {
            case "V":
              arabicNumeral -= 2 * 5;
              break;
            case "I":
              arabicNumeral -= 2 * 1;
              break;
          }
        }
        break;
      case "V":
        arabicNumeral += 5;
        for (let j = i - 1; j >= 0; j--) {
          if (s[j] === "I") {
            arabicNumeral -= 2 * 1;
            break;
          }
        }
        break;
      case "I":
        arabicNumeral += 1;
        break;
    }
  }
  return arabicNumeral;
};
