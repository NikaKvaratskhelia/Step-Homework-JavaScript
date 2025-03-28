// task 1

let i

for (i = 1; i < 11; i++) {
    console.log(i * 6)
}

// task 2

let i2 

for (i2 = 0; i2 < 100; i2++) {
    console.log(Math.pow(i2, 2))
}

// task 3

let num = 123

let reversed = 0;
    
while (num != 0) {
    let lastDigit = num % 10; 
    reversed = reversed * 10 + lastDigit; 
    num = Math.floor(num / 10); 
}

console.log(reversed)

// task 4

let num1 = 0

while (2**10 != num1) {
    num1++
    if (2**10 == num1) {
        console.log(num1)
    }
}