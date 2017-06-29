var object = {};
console.log(object);
object.name = 'jairo';
object.message = 'hello world';
console.log(object);
/**
{}
{ name: 'jairo', message: 'hello world' } */

var obj = {name: 'jairoobj'};
var {name} = obj; // which is same as var name = obj.name;
console.log(name); // jairoobj