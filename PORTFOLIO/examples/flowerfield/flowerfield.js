var examples;
(function (examples) {
    window.addEventListener("load", init);
    examples.allBees = [];
    examples.flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        examples.crc2 = canvas.getContext("2d");
        examples.drawImage();
        examples.getImage = examples.crc2.getImageData(0, 0, 400, 260);
        create10Bees();
        document.getElementsByTagName("canvas")[0].addEventListener("click", createNewBee);
        setTimeout(animateBees, 100);
    }
    function create10Bees() {
        for (let i = 0; i < 10; i++) {
            if (i < 6) {
                createHoneyBee();
            }
            else {
                createNewBee();
            }
        }
        //console.log(allBees);
    }
    function createNewBee() {
        let b = new examples.Beedata();
        examples.allBees.push(b);
    }
    function createHoneyBee() {
        let b = new examples.Honeybee();
        examples.allBees.push(b);
    }
    function animateBees() {
        examples.crc2.putImageData(examples.getImage, 0, 0);
        for (let i = 0; i < examples.allBees.length - 1; i++) {
            examples.allBees[i].move(i);
            if (examples.allBees[i].stopp < 21 && examples.allBees[i].stopp != 0) {
                examples.allBees[i].stopp += 1;
            }
            if (examples.allBees[i].stopp == 20) {
                examples.allBees[i].stopp = 0;
            }
        }
        setTimeout(animateBees, 100);
    }
})(examples || (examples = {}));
//# sourceMappingURL=flowerfield.js.map