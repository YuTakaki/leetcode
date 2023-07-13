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

// function reverseList(head: ListNode | null): ListNode | null {
//     let curr = head
//     let next = null
//     let prev = null
    
//     while(curr) {
//         next = curr.next
//         curr.next = prev
        
//         prev = curr
//         curr = next  
//     }
//     return prev

// };

const dfs = (curr: ListNode | null) => {
    const prev = reverseList(curr.next)
    curr.next.next = curr
    curr.next = null
    return prev
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head?.next) return head;
    return dfs(head)

};



// function reverseList(head: ListNode | null): ListNode | null {
//     // push val in the array
//     const array = []
//     let curr = head
//     while (curr) {
//         array.push(curr.val)
//         curr = curr.next
//     }
    
//     // create a new Object
//     let newNode = null
//     let tail = newNode
    
//     for (let i = array.length - 1; i >= 0; i--){
//         const node = new ListNode(array[i], null)
//         if (tail !== null) {
//             tail.next = node
//             tail = tail.next
//         }else {
//             newNode = node
//             tail = newNode
//         }
//     }
    
//     return newNode

// };