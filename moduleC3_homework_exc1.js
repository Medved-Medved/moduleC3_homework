// С3.3 Практика Задание 1
function printObj(obj) {
  for (let prop in obj){
    if (obj.hasOwnProperty(prop)){
      console.log(`propertyname =  ${prop}, propertyvalue =  ${obj[prop]}`)
    }
  }
}

const obj1 = {
  prop1: 'property value 1',
  prop2: 'property value 2'
}

printObj(obj1);
