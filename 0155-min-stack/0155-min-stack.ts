class MinStack {
    private stack: number[]

    constructor() {
        this.stack = []
    }

    push(val: number): void {
        this.stack = [...this.stack, val]
    }

    pop(): void {
        this.stack = this.stack.slice(0, this.stack.length - 1)
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return Math.min(...this.stack)

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */