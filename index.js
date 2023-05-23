class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This car is a ${this.year} ${this.make} ${this.model}.`
    }
}



    


class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range
    }
    
}

const Tesla = new ElectricCar('Tesla', 'S', '2019', '300')