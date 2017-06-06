namespace examples {

    export function drawImage(): void {

        drawSky(0, 0, 400, 260);
        drawMountain();
        drawGrass(400);
        drawCloud(300, 70);
        drawTree();
        drawBeehive();
        drawFlowers();

    }
    function drawFlowers(): void {
        for (let i: number = 0; i < 50; i++) {
            let flowerKind: number = Math.round(Math.random());
            if (flowerKind == 0) {
                let f: Flower1 = new Flower1();
                if (i < 6) {
                    flowers.push(f);
                }
            }
            if (flowerKind == 1) {
                let f: Flower2 = new Flower2();
                if (i < 6) {
                    flowers.push(f);
                }
            }
        }
        console.log(flowers);
    }
    function drawSky(_x: number, _y: number, _width: number, _height: number): void {
        crc2.fillStyle = "#cce6ff";
        crc2.fillRect(_x, _y, _width, _height);
    }
    function drawGrass(_width: number): void {
        crc2.beginPath();
        crc2.moveTo(0, 120);
        crc2.quadraticCurveTo(50, 100, 80, 130);
        crc2.quadraticCurveTo(130, 180, 180, 150);
        crc2.quadraticCurveTo(270, 100, _width, 150);
        crc2.lineTo(_width, 260);
        crc2.lineTo(0, 260);
        crc2.closePath();
        crc2.fillStyle = "#33cc33";
        crc2.fill();
    }
    function drawMountain(): void {
        crc2.beginPath();
        crc2.moveTo(70, 170);
        crc2.lineTo(110, 100);
        crc2.lineTo(150, 170);
        crc2.closePath();
        crc2.fillStyle = "#999999";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(110, 170);
        crc2.lineTo(150, 80);
        crc2.lineTo(190, 170);
        crc2.closePath();
        crc2.fillStyle = "#999999";
        crc2.fill();
    }
    function drawCloud(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 45, _y, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 30, _y, 15, 0, 2 * Math.PI);
        crc2.arc(_x + 30, _y - 15, 15, 0, 2 * Math.PI);
        crc2.arc(_x + 30, _y + 10, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawTree(): void {
        crc2.beginPath();
        crc2.moveTo(35, 120);
        crc2.lineTo(36, 80);
        crc2.lineTo(39, 80);
        crc2.lineTo(40, 120);
        crc2.closePath();
        crc2.fillStyle = "#4d2800";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(37.5, 80, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#1f7a1f";
        crc2.fill();
    }
    function drawBeehive(): void {
        crc2.fillStyle = "#4d2800";
        crc2.fillRect(320, 110, 30, 20);
        crc2.fillRect(325, 120, 5, 15);
        crc2.fillRect(340, 120, 5, 15);
        crc2.fillStyle = "#000000";
        crc2.fillRect(325, 115, 20, 2);
    }
}