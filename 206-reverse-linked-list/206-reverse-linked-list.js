/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
var reverseList = function(head) {
    // iterate through the head first
    // create a variable newNode
    
    // hav a curr that = temp
    // let temp to be tep.next
    // let curr.next = null
    // let cur.next = newNode.next
    // newNode.next = curr.next
    let newNode = new ListNode(-1);
    let temp = head;
    while(temp){
        const curr = temp;
        temp = temp.next
        curr.next = null;
        curr.next = newNode.next;
        newNode.next = curr;
    }
    
    return newNode.next
    
};