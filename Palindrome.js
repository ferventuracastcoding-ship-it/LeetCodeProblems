// isPalindrome(s)
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    // left = 0;
    // right = s.length - 1;
    let left = 0;
    let right = s.length - 1;
    // while loop
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        // left++
        // right--
        left++;
        right--;
    }
    // return true;
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true
