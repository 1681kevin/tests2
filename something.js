let globalVar = 'I am global';
var anotherGlobal = 'I am also global';
const PI = 3.14;
function scopetest () {
  console.log(globalVar); // Accessible
  console.log(anotherGlobal); // Accessible
  console.log(PI); // Accessible
}

scopetest();
console.log(globalVar);