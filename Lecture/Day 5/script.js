let me = {
  name: "Nika",
  surname: " Kvaratskhelia",
  age: 15,
  address: "vashlijvari",
  introduction: function () {
    return `My name is ${this.name}, my age is ${this.age} and i live in ${this.address}`;
  },
};

console.log(me.introduction());

let grades = {
  math: 90,
  physics: 50,
  chemystry: 100,
  literature: 70,
};

let sum = 0;
let count = 0;

for (let subject in grades) {
  sum += grades[subject];
  count++;
}

let avrg = sum / count;
console.log("Average:", avrg);
