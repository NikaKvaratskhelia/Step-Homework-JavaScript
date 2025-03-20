// If else

let age = 18

if (age>15) {
    console.log('User is valid')
} else if (age<18 && age>=10) {
    console.log('Wait a lil longer')
} else {
    console.log('User is not valid')
}


// Terner

let personAge = 20

let canVote = personAge>18 ? 'True' : 'False'

console.log (canVote)

// Switch

let day = 3

switch (day) {
    case 1:
        console.log('Monday')
        break;

    case 2:
        console.log('Tuesday')
        break;

    case 3:
        console.log('Wednesday')
        break;

    case 4:
        console.log('Thursday')
        break;

    case 5:
        console.log('Friday')
        break;        

    case 6:
        console.log('Saturday')
        break;

    case 7:
        console.log('Sunday')
        break;

    default:
        console.log('Another Day')
        break;
}