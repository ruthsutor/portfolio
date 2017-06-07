var examples;
(function (examples) {
    class Beedata {
        constructor() {
            let random = Math.round(Math.random());
            if (random == 1) {
                this.big = true;
            }
            if (random == 0) {
                this.big = false;
            }
            let random2 = Math.round(Math.random());
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
        draw() {
            if (this.big == false) {
                examples.crc2.beginPath();
                examples.crc2.arc(this.xposition, this.yposition, 1, 0, 2 * Math.PI);
                examples.crc2.closePath();
                examples.crc2.fillStyle = "#000000";
                examples.crc2.fill();
                examples.crc2.beginPath();
                examples.crc2.arc(this.xposition + 1, this.yposition, 1, 0, 2 * Math.PI);
                examples.crc2.closePath();
                examples.crc2.fillStyle = "#000000";
                examples.crc2.fill();
                examples.crc2.fillStyle = this.color;
                examples.crc2.fillRect(this.xposition, this.yposition - 1, 1, 2);
            }
            if (this.big == true) {
                examples.crc2.beginPath();
                examples.crc2.arc(this.xposition, this.yposition, 1.5, 0, 2 * Math.PI);
                examples.crc2.closePath();
                examples.crc2.fillStyle = "#000000";
                examples.crc2.fill();
                examples.crc2.beginPath();
                examples.crc2.arc(this.xposition + 2, this.yposition, 1.5, 0, 2 * Math.PI);
                examples.crc2.closePath();
                examples.crc2.fillStyle = "#000000";
                examples.crc2.fill();
                examples.crc2.fillStyle = this.color;
                examples.crc2.fillRect(this.xposition, this.yposition - 1, 2, 2);
            }
        }
        move(_i) {
            let randomX = Math.round(Math.random() * 6);
            this.xposition += (randomX - 4);
            let randomY = Math.round(Math.random() * 6);
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
    examples.Beedata = Beedata;
    class Honeybee extends Beedata {
        constructor() {
            super();
            this.setspeed();
            this.settargetflower();
            this.gohome = false;
            this.stopp = 0;
            this.nectar = 0;
        }
        setspeed() {
            let random = Math.round(Math.random());
            if (random == 0) {
                this.speed = 0.1;
            }
            else {
                this.speed = 0.05;
            }
        }
        settargetflower() {
            this.random = Math.round(Math.random() * 5);
            let targetflower = examples.flowers[this.random];
            this.xtarget = targetflower.xposition;
            this.ytarget = targetflower.yposition;
        }
        move(_i) {
            if (this.gohome == true && this.stopp == 0) {
                let xDiff = this.xtarget - this.xposition;
                let yDiff = this.ytarget - this.yposition;
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
                let xDiff = this.xtarget - this.xposition;
                let yDiff = this.ytarget - this.yposition;
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
            let beeid = String(_i + 1);
            document.getElementById(beeid + "task").innerHTML = this.task;
            document.getElementById(beeid + "nectar").innerHTML = this.nectar + "%";
        }
    }
    examples.Honeybee = Honeybee;
})(examples || (examples = {}));
//# sourceMappingURL=bees.js.map