function isPalindrome(head) {
    // Find the middle.
 // let slow = head;
 // let fast = head;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
     // slow = slow.nexr;
     // fast = fast.next.next;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half.
 // let previous = null;
    let previous = null;

    while (slow) {
      // const next = slow.next
        const next = slow.next;
     // slow.next = previous;
     // previous = slow;
     // slow = next;
        slow.next = previous;
        previous = slow;
        slow = next;
    }

    // Compare both halves.
 // let left = head;
 // let right = previous;
    let left = head;
    let right = previous;

    while (right) {
        if (left.val !== right.val) {
          // return false;
            return false;
        }
      // left = left.next;
      // right = right.next
        left = left.next;
        right = right.next;
    }
// return true
    return true;
}
