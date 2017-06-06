namespace examples {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let allBees: Beedata[] = [];
    export let flowers: Flowers[] = [];
    export let getImage: ImageData;
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawImage();
        getImage = crc2.getImageData(0, 0, 400, 260);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        setTimeout(animateBees, 100);
    }
    function create10Bees(): void {
        for (let i: number = 0; i < 10; i++) {
            if (i < 6) {
                createHoneyBee();
            }
            else {
                createNewBee();
            }
        }
        //console.log(allBees);
    }
    function createNewBee(): void {
        let b: Beedata = new Beedata();
        allBees.push(b);
    }
    function createHoneyBee(): void {
        let b: Honeybee = new Honeybee();
        allBees.push(b);
    }
    function animateBees(): void {
        crc2.putImageData(getImage, 0, 0);
        for (let i: number = 0; i < allBees.length - 1; i++) {
            allBees[i].move(i);
            if (allBees[i].stopp < 21 && allBees[i].stopp != 0) {
                allBees[i].stopp += 1;
            }
            if (allBees[i].stopp == 20) {
                allBees[i].stopp = 0;
            }
        }
        setTimeout(animateBees, 100);
    }
}