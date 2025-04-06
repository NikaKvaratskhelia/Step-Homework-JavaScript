// task 1

let num1 = 7.45;
let num2 = "13.56";

function numbers() {
  let result = Number(Math.round(num1)) * Number(Math.round(num2));
  return document.write(result);
}

numbers();

// task 2

let num3 = 20.3;
let num4 = 27.2;

function toFixed() {
  result = num3 + num4;
  return document.write(result.toFixed(2));
}

toFixed();

// ეხლა ვნახე ორივე ფუნქციის ის გამოიტანა ოღონდ გადბმულად, 98 ტასკ 1ია, 47,50 ტასკ 2

// task 3

let num5 = 77;

let result1 = Math.sqrt(num5).toFixed(1);

alert(result);

// task 4

let num6 = 3.55;

let result2 = Math.pow(num6, 3).toFixed(2);

console.log(result2);

// task 5

function info(str) {
  alert(str);
}

info("random");

// task 6

function exponentiation(nu1, nu2) {
  return alert(Math.pow(nu1, nu2));
}

exponentiation(3, 8);

// task 7

function isEven(numb1) {
  if (numb1 % 2 == 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

// task 8

function stringChange(string, length) {
  let newString = "";

  if (string.length >= length) {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
  } else {
    alert("magdeni asobgera araqvs");
  }

  return alert(newString);
}

stringChange("anbani", 2);

// task 9

const addrP = document.getElementById("my-Address")

function addAddress(addr) {
    addrP.innerHTML += " " + addr
}

addAddress(prompt("what is your address?"))

// task 10 

function rounIt(number1, number2) {
    let roundToOnes = Math.round(number1 * number2)

    let roundToTens = Math.round((number1 * number2) / 10) * 10

    let roundToHundreds = Math.round((number1 * number2) / 100) * 100

    return alert(`
        ${roundToOnes}
        ${roundToHundreds}
        ${roundToTens}`)
}

rounIt(12, 5)

// task 11

function removeHtml(string) {
    if (string.toUpperCase().includes('HTML')) {
        string = string.toUpperCase().replace(
            /HTML/g, '')
        alert(string)
    }
}

removeHtml('ianci aoina html aiunca html uian html')

// task 12

function squared(number) {
    return number ** 2
}

squared(4)