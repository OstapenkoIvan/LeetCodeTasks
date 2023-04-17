// 1 .Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {
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

const romanToInt = function (s) {
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

const longestCommonPrefix = function (strs) {
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

const isValid = function (s) {
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

//4. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

const removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};

//2nd variant

const removeDuplicatesTwo = function (nums) {
  nums.splice(0, nums.length, ...new Set(nums));
};

// 5. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

const removeDuplicatesThree = () => {
  while (nums.indexOf(val) >= 0) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

// 6. Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1

const haystack = "sadbutsad";
const needle = "sad";

const strStr = function (haystack, needle) {
  if (needle === "" || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  const hayArr = haystack.split(needle);

  return hayArr.length > 1 ? hayArr[0].length : -1;
};

const strStrTwo = (haystack, needle) => {
  if (needle === "" || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }

  return -1;
};
