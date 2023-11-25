/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function kthSmallest(root: TreeNode | null, k: number): number {
    const stack = []
    let n = 0
    let curr = root

    
    while(curr || stack.length > 0) {
        while(curr) {
            stack.push(curr)
            curr = curr.left
        } 
        curr = stack.pop()
        
        n += 1
        if (n === k) {
            return curr.val
        }

        curr = curr.right
    }

};

