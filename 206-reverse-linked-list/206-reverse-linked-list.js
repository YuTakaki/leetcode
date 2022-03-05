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
    const array = []
    let newNode = new ListNode(-1);
    let temp = head;
    while(temp){
        array.push(temp.val);
        temp = temp.next
    }
    
    for (let i = array.length - 1; i >=0; i--) {
        if(!newNode) {
            newNode = new ListNode(array[i]);
            continue;
        }
        let temp2 = newNode;
        while(temp2.next){
            temp2 = temp2.next
        }
        temp2.next =  new ListNode(array[i])
    }
    
    return newNode.next
    
};