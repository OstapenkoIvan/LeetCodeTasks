// 1 .Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const secondVal = nums.indexOf(target - nums[i], i + 1);
    if (secondVal > 0) {
      return [i, secondVal];
    }
    continue;
  }
  return;
};

// 2. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

var romanToInt = function (s) {
  const vars = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (vars[s[i]] > vars[s[i - 1]]) {
      result += vars[s[i]] - vars[s[i - 1]];
      i--;
      continue;
    }
    result += vars[s[i]];
  }
  return result;
};

// 3. Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  if (!strs) {
    return "";
  }

  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      result += strs[0][i];
      continue;
    }
    break;
  }
  return result;
};

//   4. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//   An input string is valid if:

//   Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.
//   Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
