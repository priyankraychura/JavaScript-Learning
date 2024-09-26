class Car{
    constructor(brand, model, year, color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getCarInfo(){
        return `${this.brand} ${this.model} (${this.year}) - ${this.color}`;
    }

    getCarAge(currentYear){
        return `${currentYear - this.year} years old.`;
    }

    changeColor(newColor){
        this.color = newColor;
    }
}

const car1 = new Car("Toyota", "Camry", 2015, "Black");
const car2 = new Car("Honda", "Civic", 2018, "White");

console.log(car1.getCarInfo())
console.log(car1.getCarAge(2024))
console.log(car2.getCarInfo())
console.log(car2.getCarAge(2024))

car1.changeColor("Blue");
console.log(car1.getCarInfo());