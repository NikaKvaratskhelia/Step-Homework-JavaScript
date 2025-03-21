let inputNum = Number(prompt('Enter a number between 1-12 for month'))

switch (inputNum) {
    case 1:
        console.log('January')
        break;

    case 2:
        console.log('February')
        break;

    case 3:
        console.log('March')
        break;

    case 4:
        console.log('April')
        break;

    case 5:
        console.log('May')
        break;

    case 6:
        console.log('June')
        break;

    case 7:
        console.log('July')
        break;

    case 8:
        console.log('August')
        break;

    case 9:
        console.log('September')
        break;

    case 10:
        console.log('October')
        break;

    case 11:
        console.log('November')
        break;

    case 12:
        console.log('December')
        break;

    default:
        break;
}

if (inputNum <= 2 || inputNum == 12 ) {
    console.log('Winter')
} 

if (inputNum <=5 && inputNum > 2 ) {
    console.log('Spring')
} 

if (inputNum <=8 && inputNum > 5 ) {
    console.log('Summer')
} 

if (inputNum <=11 && inputNum > 8 ) {
    console.log('Autumn')
} 