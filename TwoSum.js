function twoSum(nums, target) {
    // const map = new Map();
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // const compliment = target - nums[i];
        const complement = target - nums[i];

        if (map.has(complement)) {
            // return [map.get(compliment), i];
            return [map.get(complement), i];
        }
        // map.set(nums[i], i);
        map.set(nums[i], i);
    }
 // return [];
    return [];
}
// console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]
// Explaining the TwoSum problem in javascript
// the twosum problem is an array
// the two sum has two parameters
// holds a new Map() object
// a for loop with the nums.length statement
// a compliment variable with the target parameter
// munis the num array with the index [i]
// if statement with the map variable and has function
// compliment parameter
// returns the map variable
// returns an empty array
