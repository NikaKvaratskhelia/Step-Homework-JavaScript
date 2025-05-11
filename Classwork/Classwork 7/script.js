class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Persons("nika", 15);
const person2 = new Persons("nia", 16);

class Products {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  getFinalProduct() {
    return this.price -= this.discount;
  }
}

const toy = new Products("toy1", 20, 10);

console.log(toy.getFinalProduct());
