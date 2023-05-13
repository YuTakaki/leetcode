function calPoints(operations: string[]): number {
    const score = []
    
    for (let item of operations) {
        if (item === "+") {
            score.push(score[score.length-1] + score[score.length-2])
        } else if (item === "D") {
            score.push(score[score.length-1] * 2)
        } else if (item === "C") {
            score.pop()
        } else {
            score.push(Number(item))
        }
    }
    console.log(score)
    
    
    return score.reduce((prev, curr) => prev + curr,0)

};