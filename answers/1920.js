/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution using for loop
var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

// One-liner solution using map
var buildArrayMap = function (nums) {
  return nums.map((value, index) => nums[nums[index]]);
};
