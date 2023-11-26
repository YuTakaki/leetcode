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

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return []
    const result = []
    const queue = [root]
    
    while (queue.length > 0) {
        const queueLen = queue.length
        // did the for loop to track the nodes level
        for (let i = 0; i < queueLen; i++) {
            const curr = queue.shift()
            if (i === queueLen - 1) {
                result.push(curr.val)
            }
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }
    return result
    
};