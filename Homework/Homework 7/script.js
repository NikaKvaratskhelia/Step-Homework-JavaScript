// task 1

let names = ["Nino", "Giorgi", "Ana", "Luka"];

console.log(names.sort());
// anbanis mixedvit

console.log(names.sort((a, b) => a.length - b.length));
// sigrdzit

// task 2

let people = [
  { name: "Nino", age: 25, city: "Axalcixe" },

  { name: "Giorgi", age: 25, city: "Batumi" },

  { name: "Lika", age: 30, city: "Tbilisi" },

  { name: "Saba", age: 25, city: "Tbilisi" },
];

console.log(
  "by age: ",
  people.sort((a, b) => a.age - b.age)
);

console.log(
  "by city alphabetical: ",
  people.sort((a, b) => a.city.localeCompare(b.city))
);

// es mdnze vnaxe mas sxvanariad ver gavakete

console.log(
  "by name alphabetical: ",
  people.sort((a, b) => a.name.localeCompare(b.name))
);

// task 3

let nums = [5, 2, 7, 8, 1, 4, 3, 6];

nums.sort((a, b) => {
  if (a % 2 === b % 2) {
    return a - b;
  } else {
    if (a % 2 !== 0) {
      return -1;
    } else {
      return 1;
    }
  }
});

console.log(nums);

// task 4

let employees = [
  { name: "Anna", salary: 1000, hours: 20 },

  { name: "Lasha", salary: 1500, hours: 40 },

  { name: "Mariam", salary: 1200, hours: 30 },
];


console.log(
    employees.sort((a, b) => 
        b.salary / b.hours - a.salary / a.hours
    )
)