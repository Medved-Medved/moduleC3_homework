
// С3.4 Практика Задание 4

function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isSwitchedOn = true;  
}
ElectricDevice.prototype.switchOn = function(){
  this.isSwitchedOn = true;
  console.log('Electric device '+this.name+' is switched on');
};
ElectricDevice.prototype.switchOff = function(){
  this.isSwitchedOn = false;
  console.log('Electric device '+this.name+' is switched off');
};
ElectricDevice.prototype.printPower = function(){
  console.log('Device '+this.name+' doesn\'t have a power');
};

function Lamp(name, power, color){ 
  this.name = name;
  this.color = color;
  this.power = power;
};
Lamp.prototype = new ElectricDevice();
Lamp.prototype.printPower = function(){
  console.log('Lamp '+this.name+' has a '+this.power+'Wt power');
};
function Comp(name, power, color){ 
  this.name = name;
  this.color = color;
  this.power = power;
};
Comp.prototype = new ElectricDevice();
Comp.prototype.printPower = function(){
  console.log('Computer '+this.name+' has a '+this.power+'Wt power');
};

const dev = new ElectricDevice('Transformator', 0);
const lamp = new Lamp('Mars', 50, 'Red');
const comp = new Comp('Dell', 500, 'Black');

const devices = [dev, lamp, comp];

for (var idx = 0; idx<devices.length; idx++){
  devices[idx].switchOn();
  devices[idx].switchOff();
  devices[idx].printPower();
}
