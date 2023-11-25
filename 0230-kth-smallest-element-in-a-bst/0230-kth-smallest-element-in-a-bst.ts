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

function traverse(root: TreeNode | null, arr = []): number[] {
    if (root === null) return []
    traverse(root.left, arr)
    arr.push(root.val)
    traverse(root.right, arr)
    return arr
}

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack = traverse(root)
    return stack[k-1]
};