const num = 7
 
let guess = Number(prompt('Whats your guess'))


while (num != guess) {
     if (num > guess) {
        alert('Too low')
     } else  {
        alert('Too high')
     }     
     guess = Number(prompt('Whats your guess'))
}

alert('You won')