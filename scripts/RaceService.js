class RaceService
{
    cars = [];

    constructor(cars)
    {
        this.cars = cars;
    }

    start()
    {
        this.cars.forEach(car => car.run());
    }
}