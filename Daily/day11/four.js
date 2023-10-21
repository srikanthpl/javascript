class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    let age = date.getFullYear() - this.year;
    console.log("The Age of the Car is:",age);
  }
}

const myCar = new Car("Ford", 2014);
myCar.age()
