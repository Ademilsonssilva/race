function startRace()
{
    
    let domService = new DOMService();
    
    let cars = domService.getCarsByInputs();
    
    let raceService = new RaceService(cars);
    
    domService.drawCars(cars);

    domService.showCountdown(raceService, 3);

}

function newCar()
{
    let domService = new DOMService();
    domService.addCarConfig();
}