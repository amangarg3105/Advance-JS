// function fun(...input){
// let sum = 0;
// for(let i of input){
// sum+=i;
// }
// return sum;
// }
// console.log(fun(1,2)); //3
// console.log(fun(1,2,3)); //6
// console.log(fun(1,2,3,4,5)); //15

//
// function fun(a,b, ...c){
// console.log(`${a} ${b}`); //Mukul Latiyan
// console.log(c); //[ ‘Lionel’, ‘Messi’, ‘Barcelona’ ]
// console.log(c[0]); //Lionel
// console.log(c.length); //3
// console.log(c.indexOf('Lionel')); //0
// }
//
//
// fun('Mukul','Ronal','Lionel','Messi','Barcelona');

// const foo = (...arg) => {
//   console.log(arg[0]);
// }
//
// foo(1);
// var name = 'Xyz';
// //
// // var p = {
// //   name: 'Alfred',
// //   nn: 'Alfy',
// // };
//
// console.log(`Hi, I'm ${p.name}! Call me .`);




var arr = [1,2,3];

var [first,,third] = arr;

console.log(third);


var object = {
  name : "Aman",
  lastName : "Garg",
  profession : "Software System Architect"
}


var {name: n, profession: p} = object;

console.log(n);
