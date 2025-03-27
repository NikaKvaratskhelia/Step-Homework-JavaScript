// Obiektze moqmedebebi

let a = Math.pow(2,  3) // 8

let b = Math.pow(25) // 5

let c = Math.abs(-7) // 7 |-7|

let d = Math.random() // 0.023234892034327

let e = Math.floor(2.9) // 2

let f = Math.ceil(2.3) // 3

let g = parseInt('123px') // 123

let h = parseFloat('123.5px') // 123.5

let i = isNaN(2) // False

let j = isFinite(100) // True


// stringze moqmedebebi

let string1 = 'hello, world'
console.log(string1.length) // 13
console.log(string1[7]) // index

console.log(string1.search('world!')) // gamoitans romel indexze iwyeba es sityva

console.log(string1.slice(2,5)) // llo

console.log(string1.slice(-2)) // d!

console.log(string1.substring(2,5)) //ver gadacem uaryofit mnishvnelobas

console.log(string1.replace('world!', 'javascript!')) // hello javascript

console.log(string1.toLocaleUpperCase()) //HELLO WORLD

let str2 = 'kodm'

console.log(string1.concat( '     ', str2, '!')) // hello world     kodm!


let text = '    hello        '

console.log(text.length)

console.log(text.trim())

let text2 = 'hello javascript!'

console.log(text2.includes('javascript!'))