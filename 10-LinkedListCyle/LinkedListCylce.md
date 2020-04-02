## Linked List Cycle

### Problem

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

**Example:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

```

### My Solution

```js
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
```
