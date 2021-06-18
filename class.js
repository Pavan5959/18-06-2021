class Obj1{
  constructor(name){
    this.name = name;
  }
}
class Obj2{
  constructor(age){
    this.age = age;
  }
}

let obj1 = new Obj1('ABCDEF...');
let obj2 = new Obj2(6);
let obj = Object.assign(obj1, obj2);
//console.log(obj1 instanceof Obj1);
//console.log(obj2 instanceof Obj2);
//console.log(obj instanceof Obj1);
//console.log(obj instanceof Obj2);
console.log(obj.__proto__ == Obj1.prototype);
console.log(obj.__proto__ == Obj2.prototype);
 
console.log(obj);
