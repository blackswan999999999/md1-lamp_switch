class SwitchButton {
    constructor(lamp) {
        this.lamp = lamp;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOnOff() {
        this.lamp.turnOnOff();
    }
}

class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    turnOnOff() {
        this.status = !this.status;
        //gán giá trị đối cho status
        this.status ? console.log('Lighting') : console.log('Not Lighting');
    }
}

let myLamp = new ElectricLamp(false);
let mySwitch = new SwitchButton(myLamp);

for (let i = 0; i < 10; i++) {
    mySwitch.switchOnOff();
}