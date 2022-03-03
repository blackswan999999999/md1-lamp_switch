class SwitchButton {
    constructor(lamp) {
        this.lamp = lamp;
    }

    // connectToLamp(lamp) {
    //     this.lamp = lamp;
    // }

    switchOn(lamp) {
        this.lamp.turnOn();
    }
    switchOff(lamp) {
        this.lamp.turnOff();
    }
}

class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    turnOn() {
         console.log('Lighting') ;
    }
    turnOff() {
            console.log('not Lighting') ;
        }
}

let lamp1= new ElectricLamp(false);
let switch1= new SwitchButton(lamp1);

for (let i=0;i<10;i++){
    if(lamp1.status===false){
        switch1.switchOn();
        lamp1.status=!lamp1.status;
    }else {
        switch1.switchOff();
        lamp1.status=!lamp1.status;
    }

}