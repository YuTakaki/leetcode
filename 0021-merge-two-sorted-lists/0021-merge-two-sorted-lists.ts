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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result = null
    let l1 = list1
    let l2 = list2
    let tail = result    
    while(l1 && l2) {
        let node: ListNode
        if (l1.val > l2.val) {
            node = new ListNode(l2.val)
            l2 = l2.next
        } else {
            node = new ListNode(l1.val)
            l1 = l1.next
        }
        if (result == null) {
            result = node
            tail = node
        } else {
            tail.next = node
            tail = tail.next
        }
    }
    
    while (l1) {
        const node = new ListNode(l1.val)
        if (result == null) {
            result = node
            tail = node
        } else {
            tail.next = node
            tail = tail.next
        }
        l1 = l1.next  
    }
    
    while (l2) {
        const node = new ListNode(l2.val)
        if (result == null) {
            result = node
            tail = node
        } else {
            tail.next = node
            tail = tail.next
        }
        l2 = l2.next  
    }
    
    return result
    

};