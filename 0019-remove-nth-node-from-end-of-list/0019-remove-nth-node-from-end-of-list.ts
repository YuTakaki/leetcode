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
    
    if (cache.length < n) {
        return head
        }
    const index = cache.length - n - 1;
    console.log(index)
    if (cache.length === 1) {
        head = null
        return head;
    }
    if (n === 1) {
        cache[index].next = null
        return head;
    }
    if (index < 0) {
        head = head.next;
        return head
    }
    cache[index].next = cache[index + 1].next
    return head;

};