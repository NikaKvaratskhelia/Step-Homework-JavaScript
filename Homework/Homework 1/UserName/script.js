const correctUserName = 'admin'
const correctPassword = '1234'

let userNameInput = prompt('Enter the username')
let userPasswordInput = prompt('Enter the paassword')

if (correctUserName == userNameInput && correctPassword == userPasswordInput) {
    console.log('Welcome')
} else {
    console.log('Invalid Credentials')
}