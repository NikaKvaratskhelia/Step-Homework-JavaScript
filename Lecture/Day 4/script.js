const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const doubled = numbers.map(a => a * 2) // AXAL MASIVS ABURNEBS ORIGINALS AR CVLIS

console.log(doubled)

const filltered = numbers.fillter(num => num  % 2 == 0)

console.log(filltered)


const hasLowerScore = numbers.some(score => score < 40)
console.log(hasLowerScore) //mushaobs rogorc ||

const hasLowerScorE = numbers.every(score => score < 40)
console.log(hasLowerScorE) // mushaobs roogrc &&


let total = 0

numbers.forEach(score => total += score)
console.log(total)