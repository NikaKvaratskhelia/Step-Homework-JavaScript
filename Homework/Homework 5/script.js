// task 1

let book = {
  name: "The Gambler",
  author: "Fyodor Dostoevsky",
  size: "100 pages",
};

for (i in book) {
  console.log(i + ": " + book[i]);
}

// task 2

let person = {
  name: "Nika",
  surname: "Kvaratskhelia",
  age: 15,
  location: "Vashlijvari",
  introduce: function introduce() {
    return `Hello, my name is ${this.name} ${this.surname}. I am ${this.age} years old. I live in ${this.location}`;
  },
};

console.log(person.introduce());

// task 3

let car = {};

// damateba
car.brand = "Mercedes Benz";
car.year = 2023;
car.model = "CLS 400";

// gadawera
car.year = 2020;

// task 4

let inventory = {
  apple: 3,
  phone: 5,
  stone: 2,
};

for (const key in inventory) {
  inventory[key] *= 2;
}

console.log(inventory);

// task 5

const users = [
  {
    name: "გიორგი",
    accounts: [
      { bank: "TBC", balance: 1500 },
      { bank: "BOG", balance: 2000 },
    ],
  },
  {
    name: "მარიამი",
    accounts: [
      { bank: "TBC", balance: 3000 },
      { bank: "Liberty", balance: 2500 },
    ],
  },
  {
    name: "ნიკა",
    accounts: [
      { bank: "BOG", balance: 500 },
      { bank: "Credo", balance: 800 },
      { bank: "TBC", balance: 1200 },
    ],
  },
];

let richestUser = "";
let richestBalance = 0;

for (const user of users) {
  let userTotal = 0;

  for (const account of user.accounts) {
    userTotal += account.balance;
  }

  if (userTotal > richestBalance) {
    richestBalance = userTotal;
    richestUser = user.name;
  }
}

console.log(richestUser);
