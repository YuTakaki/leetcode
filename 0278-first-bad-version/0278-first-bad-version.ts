/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let l = 0;
        let r = n
        while (l <= r) {
            const pivot = Math.ceil((l + r) / 2)
            const isbad = isBadVersion(pivot)
            if (isbad) {
                r = pivot - 1
            } else {
                l = pivot + 1
            }
        }
        return Math.ceil((l + r) / 2)
    };
};