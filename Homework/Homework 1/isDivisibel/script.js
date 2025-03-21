let number = Number(prompt('What is your number'))

if (number % 3 == 0 && number % 5 == 0) {
    console.log('3ის და 5ის ჯერადია')
} else if (number % 3 == 0 && number % 5 != 0) {
    console.log ('3ის ჯერადია')
} else if (number % 3 != 0 && number % 5 == 0) {
    console.log ('5ის ჯერადია')
} else {
    console.log('არც ერთის ჯერადი არ არის')
}