let firstNum = Number(prompt('First Number'))
let operator = prompt('Which Operator')
let secondNum = Number(prompt('Second Number'))

switch (operator) {
    case '+':
        console.log(firstNum + secondNum)
        break;
    
    case '-':
        console.log(firstNum - secondNum)
        break
    
    case '*':
        console.log(firstNum * secondNum)
        break
    
    case '/':
        console.log(firstNum / secondNum)
        if (secondNum == 0 ) {
            alert('This is not a valid operation')    
        }
        break

    default:
        break;
}
