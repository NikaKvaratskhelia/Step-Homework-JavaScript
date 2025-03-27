let userName =  prompt('Your Name')

let newLetter = userName[0].toUpperCase()

let newName = userName.replace(userName[0], newLetter)

alert(newName)