/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution using array functions
var getConcatenation = function(nums) {
    return nums.concat(nums)
};

// Solution using a for loop
var getConcatenationForLoop = function(nums) {
    const length = nums.length
    for (let i = 0; i < length; i++)
        {
            nums.push(nums[i])
        }
    return nums;
};