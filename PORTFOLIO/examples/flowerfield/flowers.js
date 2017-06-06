var examples;
(function (examples) {
    class Flowers {
        constructor() {
            this.setposition();
            this.setcolor();
        }
        setposition() {
            this.yposition = Math.round((Math.random() * 100) + 160);
            this.xposition = Math.round((Math.random() * 400) + 0);
        }
        setcolor() {
            let c = Math.round(Math.random());
            if (c == 0) {
                this.color = "#ff99ff";
            }
            if (c == 1) {
                this.color = "#cc66ff";
            }
        }
    }
    examples.Flowers = Flowers;
    class Flower1 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw() {
            examples.crc2.beginPath();
            examples.crc2.moveTo(this.xposition, this.yposition);
            examples.crc2.quadraticCurveTo(this.xposition, this.yposition - 5, this.xposition + 5, this.yposition);
            examples.crc2.quadraticCurveTo(this.xposition + 7.5, this.yposition - 5, this.xposition + 10, this.yposition);
            examples.crc2.quadraticCurveTo(this.xposition + 15, this.yposition - 5, this.xposition + 15, this.yposition);
            examples.crc2.quadraticCurveTo(this.xposition + 7.5, this.yposition + 15, this.xposition, this.yposition);
            examples.crc2.closePath();
            examples.crc2.fillStyle = this.color;
            examples.crc2.fill();
            examples.crc2.beginPath();
            examples.crc2.moveTo(this.xposition + 10, this.yposition + 15);
        }
    }
    examples.Flower1 = Flower1;
    class Flower2 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw() {
            examples.crc2.beginPath();
            examples.crc2.arc(this.xposition + 5, this.yposition, 2.5, 0, 2 * Math.PI);
            examples.crc2.arc(this.xposition - 5, this.yposition, 2.5, 0, 2 * Math.PI);
            examples.crc2.arc(this.xposition, this.yposition + 5, 2.5, 0, 2 * Math.PI);
            examples.crc2.arc(this.xposition, this.yposition - 5, 2.5, 0, 2 * Math.PI);
            examples.crc2.closePath();
            examples.crc2.fillStyle = this.color;
            examples.crc2.fill();
            examples.crc2.beginPath();
            examples.crc2.arc(this.xposition + 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            examples.crc2.arc(this.xposition + 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            examples.crc2.arc(this.xposition - 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            examples.crc2.arc(this.xposition - 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            examples.crc2.closePath();
            examples.crc2.fillStyle = this.color;
            examples.crc2.fill();
            examples.crc2.beginPath();
            examples.crc2.arc(this.xposition, this.yposition, 4, 0, 2 * Math.PI);
            examples.crc2.closePath();
            examples.crc2.fillStyle = "#ffff1a";
            examples.crc2.fill();
        }
    }
    examples.Flower2 = Flower2;
})(examples || (examples = {}));
//# sourceMappingURL=flowers.js.map