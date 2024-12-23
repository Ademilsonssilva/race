class DOMService
{

    static colors = ["red", "blue", "green", "yellow", "black", "white", "orange", "purple", "brown", "pink"];

    addCarConfig()
    {
        let div = document.getElementById("car_inputs");

        let carCounter = div.children.length;

        let newDiv = document.createElement("div");
        newDiv.classList.add("car_config");

        

        let color = DOMService.colors[Math.floor(Math.random() * DOMService.colors.length)];

        DOMService.colors = DOMService.colors.filter(c => c !== color);

        let colorInput = document.createElement("input");
        colorInput.type = "hidden";
        colorInput.value = color;

        let colorSquare = document.createElement("div");
        colorSquare.classList.add("car_color_square");
        colorSquare.style.backgroundColor = color;

        let input = document.createElement("input");
        input.type = "text";
        input.value = "Motorista " + (carCounter + 1);

        let span = document.createElement("span");
        span.innerHTML = ` - Motorista ${carCounter + 1} : `;

        newDiv.appendChild(colorInput);
        newDiv.appendChild(colorSquare);
        newDiv.appendChild(span);
        newDiv.appendChild(input);
        div.appendChild(newDiv);

    }

    getCarsByInputs()
    {
        let div = document.getElementById("car_inputs");

        let cars = [];

        for (let i = 0; i < div.children.length; i++)
        {
            let color = div.children[i].children[0].value;
            let driver = div.children[i].children[3].value;

            let car = new Car(driver, color, i);

            console.log(car);
            cars.push(car);
        }

        return cars;
    }

    drawCars(cars)
    {

        let base_div = document.getElementById("track");

        while (base_div.firstChild) {
            base_div.removeChild(base_div.firstChild);
        }

        cars.forEach(car => {

            let div = document.createElement("div");
            div.id = `car_${car.id}`;
            div.classList.add("car");
            div.style.backgroundColor = car.color;

            let span = document.createElement("span");
            span.innerHTML = car.driver;

            div.appendChild(span);

            base_div.appendChild(div);
        });
    }

    showCountdown(raceService, countdown = 3)
    {
        let countdownElement = document.createElement('div');
        countdownElement.style.position = 'absolute';
        countdownElement.style.top = '50%';
        countdownElement.style.left = '50%';
        countdownElement.style.transform = 'translate(-50%, -50%)';
        countdownElement.style.fontSize = '100px';
        countdownElement.style.fontWeight = 'bold';
        countdownElement.textContent = countdown;
        document.body.appendChild(countdownElement);

        let countdownInterval = setInterval(() => {
            countdownElement.textContent = countdown;
            if (countdown === 0) {
                clearInterval(countdownInterval);
                countdownElement.remove();
                raceService.start();
            }
            countdown--;
        }, 1000);
    }
}