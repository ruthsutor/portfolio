var examples;
(function (examples) {
    function drawImage() {
        drawSky(0, 0, 400, 260);
        drawMountain();
        drawGrass(400);
        drawCloud(300, 70);
        drawTree();
        drawBeehive();
        drawFlowers();
    }
    examples.drawImage = drawImage;
    function drawFlowers() {
        for (let i = 0; i < 50; i++) {
            let flowerKind = Math.round(Math.random());
            if (flowerKind == 0) {
                let f = new examples.Flower1();
                if (i < 6) {
                    examples.flowers.push(f);
                }
            }
            if (flowerKind == 1) {
                let f = new examples.Flower2();
                if (i < 6) {
                    examples.flowers.push(f);
                }
            }
        }
        console.log(examples.flowers);
    }
    function drawSky(_x, _y, _width, _height) {
        examples.crc2.fillStyle = "#cce6ff";
        examples.crc2.fillRect(_x, _y, _width, _height);
    }
    function drawGrass(_width) {
        examples.crc2.beginPath();
        examples.crc2.moveTo(0, 120);
        examples.crc2.quadraticCurveTo(50, 100, 80, 130);
        examples.crc2.quadraticCurveTo(130, 180, 180, 150);
        examples.crc2.quadraticCurveTo(270, 100, _width, 150);
        examples.crc2.lineTo(_width, 260);
        examples.crc2.lineTo(0, 260);
        examples.crc2.closePath();
        examples.crc2.fillStyle = "#33cc33";
        examples.crc2.fill();
    }
    function drawMountain() {
        examples.crc2.beginPath();
        examples.crc2.moveTo(70, 170);
        examples.crc2.lineTo(110, 100);
        examples.crc2.lineTo(150, 170);
        examples.crc2.closePath();
        examples.crc2.fillStyle = "#999999";
        examples.crc2.fill();
        examples.crc2.beginPath();
        examples.crc2.moveTo(110, 170);
        examples.crc2.lineTo(150, 80);
        examples.crc2.lineTo(190, 170);
        examples.crc2.closePath();
        examples.crc2.fillStyle = "#999999";
        examples.crc2.fill();
    }
    function drawCloud(_x, _y) {
        examples.crc2.beginPath();
        examples.crc2.arc(_x, _y, 25, 0, 2 * Math.PI);
        examples.crc2.arc(_x + 45, _y, 10, 0, 2 * Math.PI);
        examples.crc2.arc(_x - 30, _y, 15, 0, 2 * Math.PI);
        examples.crc2.arc(_x + 30, _y - 15, 15, 0, 2 * Math.PI);
        examples.crc2.arc(_x + 30, _y + 10, 10, 0, 2 * Math.PI);
        examples.crc2.closePath();
        examples.crc2.fillStyle = "#FFFFFF";
        examples.crc2.fill();
    }
    function drawTree() {
        examples.crc2.beginPath();
        examples.crc2.moveTo(35, 120);
        examples.crc2.lineTo(36, 80);
        examples.crc2.lineTo(39, 80);
        examples.crc2.lineTo(40, 120);
        examples.crc2.closePath();
        examples.crc2.fillStyle = "#4d2800";
        examples.crc2.fill();
        examples.crc2.beginPath();
        examples.crc2.arc(37.5, 80, 15, 0, 2 * Math.PI);
        examples.crc2.closePath();
        examples.crc2.fillStyle = "#1f7a1f";
        examples.crc2.fill();
    }
    function drawBeehive() {
        examples.crc2.fillStyle = "#4d2800";
        examples.crc2.fillRect(320, 110, 30, 20);
        examples.crc2.fillRect(325, 120, 5, 15);
        examples.crc2.fillRect(340, 120, 5, 15);
        examples.crc2.fillStyle = "#000000";
        examples.crc2.fillRect(325, 115, 20, 2);
    }
})(examples || (examples = {}));
//# sourceMappingURL=background.js.map