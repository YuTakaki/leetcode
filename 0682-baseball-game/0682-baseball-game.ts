function calPoints(operations: string[]): number {
    const score = []
    for (let item of operations) {   
        switch(item){
            case "+":
                score.push(score[score.length - 1] + score[score.length - 2])
                break
            case "D":
                score.push(score[score.length - 1] * 2)
                break  
            case "C":
                score.pop()
                break
            default:
                score.push(Number(item))
                break  
        }
    }
    
    return score.reduce((prev, curr) => prev + curr,0)

};