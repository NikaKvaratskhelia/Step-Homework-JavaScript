function greet(name, greetingText) {
    setTimeout(() => {
        console.log(greetingText, name)
    }, 3000);
}

const name1 = 'Ani'
const greeting = `Hello`

greet(name1, greeting)