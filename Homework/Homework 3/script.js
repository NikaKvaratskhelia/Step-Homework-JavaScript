// task 1

let array1 =  [ 4, 24, 3, 45, 1, 37 ]

let bigNum = array1[0] 
let i = 1

while (i < array1.length) { 
    if (bigNum < array1[i]) { 
        bigNum = array1[i] 
    }
    i++
}

console.log(bigNum)


// task 2

let array2 = [ 19, 23, 12, 4, 56, 2, 3 ]
let sum = 0

for (let i = 0; i < array2.length; i++) {
    sum += array2[i]
}


let avg = sum / array2.length
console.log(avg)

// task 3

let array3 = [ 1, 2, 3, 4, 5, 6 ]

let reverseArray = []

while (array3.length > 0) {
    let newNum = array3.pop()
    reverseArray.push(newNum)
}

console.log(reverseArray)

// task 4

let array4 = [1, 2, 2, 3, 4, 4, 5, 6, ]
 
let i2 = 0


while (i2 < array4.length) { 
    if (array4.indexOf(array4[i2]) !== i2) { 
        array4.splice(i2, 1); 
    } else {
        i2++; 
    }
}

console.log(array4)

// task 5

let array5 = [ 10, 3, 7, 2, 5, 8, 1, 6 ]

let i3 = 0

while (i3 < array5.length) {
    if ( array5[i3] < 5) {
        array5.splice(i3, 1)
    }
    i3++
}

console.log(array5)

// task 6

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i4 = 0

while (i4 < numbers.length) {
    if (numbers[i4] % 2 == 0) {
        numbers.splice(i4, 1)
    }

    i4++
}

console.log(numbers)


// task 7

let fruits = [ "apple", "banana", "orange", "grape" ]

let i5 = 0

while (i5 < fruits.length) {
    if (fruits[i5] === 'banana') {
        fruits.splice(i5, 1)
    } else {
        i5++
    }
}

console.log(fruits)