class Car {
  constructor(brand, model) {
    (this.brand = brand), (this.model = model);
  }
  Info() {
    return `This is a ${this.brand}, ${this.model}`;
  }
}

const car1 = new Car("Toyota", "Corola");
console.log(car1.Info());

class Book {
  constructor(title, author = "unknown") {
    this.title = title;
    this.author = author;
  }

  getInfo() {
    return `${this.title} by ${this.author}`;
  }
}

const book1 = new Book("Book1", "Author1");
console.log(book1.getInfo());

// Extend

class Animals {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes sound woof`);
  }
}

// class Dog extends Animals {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

const newAnimal = new Animals("generic");
// const dog = new Dog("Lusy");

newAnimal.speak();
// dog.speak();

// inkafsulacia
// public available everywher
//private available only in that class
//protected available in that class and in relatives


//private
class BankAcc {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  #validateAmount(amount) {
    return amount > 0 && amount <= this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New Balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New Balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAcc(1000);
account.deposit(700);
account.withdraw(200);
console.log(account.getBalance());

//protected

class Animals {
    constructor(name) {
      this._name = name;
    }
    _makeSound() {
      console.log(`Some generic sound`);
    }
  }

class Dog extends Animals {
    constructor(name){
        super(name)
    }
}