
// С3.3 Практика Задание 2
function checkProp(obj,propname){
  //return obj.hasOwnProperty(propname);
  return propname in obj;
}

const obj2 = {
  prop1: 'property value 1',
  prop2: 'property value 2'
}

console.log(checkProp(obj2,'1'));
console.log(checkProp(obj2,'prop2'));

