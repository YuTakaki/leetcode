class KthLargest {
    public heap: number[]
    public k: number
    constructor(k: number, nums: number[]) {
        this.heap = [0]
        this.k = k
        for (let num of nums) {
            this.heap_add(num)
        }
        
        while(this.heap.length - 1 > k) {
            this.heap_pop()
        }
    
    }

    add(val: number): number {
        this.heap_add(val)
        
        while(this.heap.length - 1 >this.k) {
            this.heap_pop()
        }
        return this.heap[1]
    }
    
    heap_add(val) {
        this.heap.push(val)
        
        let index = this.heap.length - 1
        // if index is greater than one the current index is less than parent element
        while (index > 1 && this.heap[index] < this.heap[Math.floor(index / 2)]) {
            const temp = this.heap[index]
            this.heap[index] = this.heap[Math.floor(index / 2)]
            this.heap[Math.floor(index / 2)] = temp
            index = Math.floor(index / 2)
        }
    }

    heap_pop() {
        // heap length == 1 just return
        if (this.heap.length === 1) return
        // heap length == 2 heap.pop
        if (this.heap.length === 2) {
            this.heap.pop()
            return
        }
        // move the last item up in the ist index of the array
        this.heap[1] = this.heap.pop()
        
        
        let index = 1
        // check if left child exist
        while(index * 2 < this.heap.length){
            //check if right chjild exist and right child is less tha left child and right child is less than parent
            if (index * 2 + 1 < this.heap.length && this.heap[index * 2 + 1] < this.heap[index * 2] && this.heap[index] > this.heap[index * 2 + 1]) {
                const temp = this.heap[index]
                this.heap[index] = this.heap[Math.floor(index * 2 + 1)]
                this.heap[Math.floor(index * 2 + 1)] = temp
                index = Math.floor(index * 2 + 1)
                
            } else if (this.heap[index] > this.heap[Math.floor(index * 2)]) { //check if left child is less than parent
                const temp = this.heap[index]
                this.heap[index] = this.heap[Math.floor(index * 2)]
                this.heap[Math.floor(index * 2)] = temp
                index = Math.floor(index * 2)
            } else {
                break
            }
        }
        
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */