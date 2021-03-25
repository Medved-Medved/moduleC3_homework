
// С3.5 Практика Задание 5
class ElectricDevice{
  constructor (name, power) {
    this.name = name;
    this.power = power;
    this.isSwitchedOn = true;  
  }
  switchOn(){
    this.isSwitchedOn = true;
    console.log('Electric device '+this.name+' is switched on');
  }
  switchOff(){
    this.isSwitchedOn = false;
    console.log('Electric device '+this.name+' is switched off');
  }
  printPower(){
    console.log('Device '+this.name+' doesn\'t have a power');
  }
}

class Lamp extends ElectricDevice{
  constructor(name, power, color){ 
    super(name, power);
    this.color = color;
  }
  printPower(){
    console.log('Lamp '+this.name+' has a '+this.power+'Wt power');
  }
}
class Comp extends ElectricDevice{
  constructor(name, power, color){ 
    super(name,power);
    this.color = color;
  }
  printPower(){
    console.log('Computer '+this.name+' has a '+this.power+'Wt power');
  }
}

const dev = new ElectricDevice('Transformator', 0);
const lamp = new Lamp('Mars', 50, 'Red');
const comp = new Comp('Dell', 500, 'Black');

const devices = [dev, lamp, comp];

for (var idx = 0; idx<devices.length; idx++){
  devices[idx].switchOn();
  devices[idx].switchOff();
  devices[idx].printPower();
}


