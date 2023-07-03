function countStudents(students: number[], sandwiches: number[]): number {
    let count = 0
    while (count < students.length) {
        if (students[0] != sandwiches[0]) {
            count++;
            const num = students.shift()
            students.push(num)
            console.log(students)
            
        } else {
            students.shift()
            sandwiches.shift()
            count = 0
        }
    }
    return count
    
    

};