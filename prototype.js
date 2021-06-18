var person = {
 
};

var boss = {
  name : 'cde'
};

Object.setPrototypeOf(person, boss);
console.log(person.__proto__ == boss);

console.log(person.name);
