namespace examples {
    export class Beedata {
        xposition: number;
        yposition: number;
        big: boolean;
        color: string;
        stopp: number;
        constructor() {
            let random: number = Math.round(Math.random());
            if (random == 1) {
                this.big = true;
            }
            if (random == 0) {
                this.big = false;
            }
            let random2: number = Math.round(Math.random());
            if (random2 == 1) {
                this.color = "#ffff1a";
            }
            if (random2 == 0) {
                this.color = "#ff6600";
            }
            this.xposition = 320;
            this.yposition = 115;
            this.stopp = 0;
            this.draw();
        }
        draw(): void {
            if (this.big == false) {
                crc2.beginPath();
                crc2.arc(this.xposition, this.yposition, 1, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "#000000";
                crc2.fill();
                crc2.beginPath();
                crc2.arc(this.xposition + 1, this.yposition, 1, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "#000000";
                crc2.fill();
                crc2.fillStyle = this.color;
                crc2.fillRect(this.xposition, this.yposition - 1, 1, 2);
            }
            if (this.big == true) {
                crc2.beginPath();
                crc2.arc(this.xposition, this.yposition, 1.5, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "#000000";
                crc2.fill();
                crc2.beginPath();
                crc2.arc(this.xposition + 2, this.yposition, 1.5, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "#000000";
                crc2.fill();
                crc2.fillStyle = this.color;
                crc2.fillRect(this.xposition, this.yposition - 1, 2, 2);
            }
        }
        move(_i: number): void {
            let randomX: number = Math.round(Math.random() * 6);
            this.xposition += (randomX - 4); 
            let randomY: number = Math.round(Math.random() * 6);
            if (randomY > 3) {
                this.yposition += randomY;
            }
            if ((randomY < 3) || (randomY == 3)) {
                this.yposition -= randomY;
            }
            if (this.xposition < 0) {
                this.xposition = 400;
            }
            if (this.xposition > 400) {
                this.xposition = 0;
            }
            if (this.yposition > 260) {
                this.yposition = 0;
            }
            if (this.yposition < 0) {
                this.yposition = 260;
            }
            this.draw();
        }
    }
    export class Honeybee extends Beedata {
        xtarget: number;
        ytarget: number;
        gohome: boolean;
        speed: number;
        task: string;
        random: number;
        nectar: number;
        constructor() {
            super();
            this.setspeed();
            this.settargetflower();
            this.gohome = false;
            this.stopp = 0;
            this.nectar = 0;
        }
        setspeed(): void {
            let random: number = Math.round(Math.random());
            if (random == 0) {
                this.speed = 0.1;
            }
            else {
                this.speed = 0.05;
            }
        }
        settargetflower(): void {
            this.random = Math.round(Math.random() * 5);
            let targetflower: Flowers = flowers[this.random];
            this.xtarget = targetflower.xposition;
            this.ytarget = targetflower.yposition;
        }
        move(_i: number): void {
            if (this.gohome == true && this.stopp == 0) {
                let xDiff: number = this.xtarget - this.xposition;
                let yDiff: number = this.ytarget - this.yposition;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    this.stopp = 1;
                    this.gohome = false;
                    this.xtarget = 320;
                    this.ytarget = 115;
                    this.nectar = 95;
                    this.task = "refill nectar ";
                }
                else {
                    this.xposition += xDiff * this.speed;
                    this.yposition += yDiff * this.speed;
                    this.task = "fly home";
                }
            }

            if (this.gohome == false && this.stopp == 0) {
                let xDiff: number = this.xtarget - this.xposition;
                let yDiff: number = this.ytarget - this.yposition;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    this.stopp = 1;
                    this.gohome = true;
                    this.settargetflower();
                    this.nectar = 5;
                    this.task = "vomit ";
                }
                else {
                    this.xposition += xDiff * this.speed;
                    this.yposition += yDiff * this.speed;
                    this.task = "fly to Flower" + String(this.random + 1) + "  ";
                }

            }
            this.draw();
            //update task
            if (this.gohome == true && this.stopp > 0) {
                this.nectar = this.nectar + 5;
                this.task = "refill nectar ";
            }
            if (this.gohome == false && this.stopp > 0) {
                this.nectar = this.nectar - 5;
                this.task = "vomit ";
            }
            let beeid: string = String(_i + 1);
            document.getElementById(beeid + "task").innerHTML = this.task;
            document.getElementById(beeid + "nectar").innerHTML = this.nectar +"%";
        }
    }
}