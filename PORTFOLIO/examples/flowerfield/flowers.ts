namespace examples {
    export class Flowers {
        xposition: number;
        yposition: number;
        color: string;
        constructor() {
            this.setposition();
            this.setcolor();
        }
        setposition(): void {
            this.yposition = Math.round((Math.random() * 100) + 160);
            this.xposition = Math.round((Math.random() * 400) + 0);
        }
        setcolor(): void {
            let c: number = Math.round(Math.random());
            if (c == 0) {
                this.color = "#ff99ff";
            }
            if (c == 1) {
                this.color = "#cc66ff";
            }
        }

    }
    export class Flower1 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.xposition, this.yposition);
            crc2.quadraticCurveTo(this.xposition, this.yposition - 5, this.xposition + 5, this.yposition);
            crc2.quadraticCurveTo(this.xposition + 7.5, this.yposition - 5, this.xposition + 10, this.yposition);
            crc2.quadraticCurveTo(this.xposition + 15, this.yposition - 5, this.xposition + 15, this.yposition);
            crc2.quadraticCurveTo(this.xposition + 7.5, this.yposition + 15, this.xposition, this.yposition);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.xposition + 10, this.yposition + 15);

        }

    }
    export class Flower2 extends Flowers {
        constructor() {
            super();
            this.draw();
        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.xposition + 5, this.yposition, 2.5, 0, 2 * Math.PI);
            crc2.arc(this.xposition - 5, this.yposition, 2.5, 0, 2 * Math.PI);
            crc2.arc(this.xposition, this.yposition + 5, 2.5, 0, 2 * Math.PI);
            crc2.arc(this.xposition, this.yposition - 5, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.xposition + 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            crc2.arc(this.xposition + 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            crc2.arc(this.xposition - 3.5, this.yposition + 3.5, 2.5, 0, 2 * Math.PI);
            crc2.arc(this.xposition - 3.5, this.yposition - 3.5, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.xposition, this.yposition, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffff1a";
            crc2.fill();
        }
    }


}