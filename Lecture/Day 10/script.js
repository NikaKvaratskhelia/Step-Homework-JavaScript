// const now = new Date();
// console.log(now);

// function getDateComponents(date) {
//   return {
//     year: date.getFullYear(),
//     month: date.getMonth() + 1,
//     day: date.getDate(),
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//   };
// }

// const now = new Date();
// console.log(getDateComponents(now));

// function fromatDate(date, local) {
//   return {
//     date: date.toLocalDateString(local),
//   };
// }

// const date = new Date();
// console.log(`Georgian Format: ${fromatDate(date, "ka-GE")}`);
// console.log(`German Format: ${fromatDate(date, "de-DE")}`);

// function daysBetween(date1, date2) {
//   const oneDay = 24 * 60 * 60 * 1000;
//   const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
//   return diffDays;
// }

// const date1 = new ate(2009, 6, 15);
// const date2 = new ate(2025, 4, 3);
// console.log(daysBetween(date1, date2));

// function modifyDate(date, year, month, day, hours, minutes, seconds){
//     date.setFullYear(year)
//     date.setMonth(month-1),
//     date.setDate(day),
//     date.setHours(hours), 
//     date.setMinutes(minutes),
//     date.setSeconds(seconds)
//     return date
// }

// let date = new Date()

// console.log(`Starting date ${date}`)
// date = modifyDate(date, 2024,1,1,0,0,0)
// console.log(`Modified date ${date}`)

// setTimeout(() => {
//     console.log('Start')
// }, 2000);

let count = 0

const intervalID = setInterval(() => {
    count++
    console.log(count)
    if(count>=10) {
        clearInterval(intervalID)
        console.log('Done')
    }
}, 2000);