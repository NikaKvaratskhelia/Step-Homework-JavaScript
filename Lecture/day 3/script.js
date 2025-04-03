// let count = 3

// do {
//     console.log ('Number', count)
//     count++
    
// } while (count < 2);


// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (const num of array) {
//     console.log(num)
// }


let matrix = [
    ['a', 'b'],
    ['c', 'd']
]

for (let i of matrix) {
    for(let item of i){
        console.log(item)
    }
}

function greet(name) {
    console.log(`Hello ${name}`)
}

greet(prompt('What is Your name'))