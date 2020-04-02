/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = head => {
  if (!head || !head.next || !head.next.next) {
    return false;
  }
  let walker = head;
  let runner = head.next.next;
  while (runner.next !== null && runner.next.next !== null) {
    if (walker === runner) {
      return true;
    }
    walker = walker.next;
    runner = runner.next.next;
  }
  return false;
};
