/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.
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
 * @return {ListNode}
 */

/*
// First solution with a slow and fast pointer
 const middleNode = (head) => {
   !head ? [] : null;
   let walk = run head;
   while ( run !== null && run.next !== null) {
     walk = walk.next;
     run = run.next.next;
   }
   return walk;
 }
*/

// Second solution using an array and calculating the middle index with the array length
 const middleNode = (head) => {
   !head ? return [] : null;
   let nodes = [];
   let curr = head;
   while ( curr ) {
     nodes.push(curr);
     curr = curr.next
   }
   return nodes[Math.floor(nodes.length/2)]
 }
