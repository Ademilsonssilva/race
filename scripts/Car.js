class Car
{
    driver;
    color;
    id;

    static raceOver = false;

    constructor(driver, color, id)
    {
        this.id = id;
        this.driver = driver;
        this.color = color;
    }

    run()
    {

        let div = document.getElementById(`car_${this.id}`);

        let intervalId = setInterval(() => {
            const currentLeft = parseInt(div.style.left || 0, 10);
            const randomMove = Math.floor(Math.random() * 7) + 1;
            div.style.left = `${currentLeft + randomMove}px`;

            if (Car.raceOver)
            {
                clearInterval(intervalId);
            }

            if ( (currentLeft + 100) > window.innerWidth)
            {

                Car.raceOver = true;

                alert(`${this.driver} ganhou!`);
                clearInterval(intervalId);
            }

        }, 60);
    }
}