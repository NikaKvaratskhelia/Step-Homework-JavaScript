let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0

while (i < array.length) {
    console.log(array[i])
    i++
}

function greet(name) {
    console.log(`Hello ${name}`)
}

greet(prompt('What is Your name'))