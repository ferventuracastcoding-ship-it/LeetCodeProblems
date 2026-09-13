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
