/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let curr = head;
    const cache = []
    
    while(curr != null) {
        cache.push(curr)
        curr = curr.next;
    }
    const index = (cache.length - n) - 1;
    if (cache.length === 1) {
        head = null
    } else if (n === 1) {
        cache[index].next = null
    } else if (cache.length === n) {
        head = head.next;
    } else {
        cache[index].next = cache[index].next.next
    }
    return head;
};