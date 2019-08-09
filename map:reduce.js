//Higher-Order Functions

// A Higher-Order function is a function that receives a function as an argument or returns the function as output.


// var persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"}
// ];
//
//
// function getFullName(item) {
//   console.log("This function");
//   var fullname = [item.firstname,item.lastname].join(" ");
//   return fullname;
// }
// console.log(persons.map(getFullName));

// var ages = [32, 33, 16, 40];
//
// function checkAdult(age) {
//   return age >= 18;
// }
//
// console.log(ages.filter(checkAdult));
//
//
// var officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];
//
// //.forEach
//
// var officersIds = [];
// officers.forEach(function (officer) {
//   officersIds.push(officer.id);
// });
//
// var officersIds = officers.map(function (officer) {
//   return officer.id
// });
//
// const officersIds = officers.map(officer => officer.id);




//
// const posts = [
//   {id: 1, upVotes: 2},
//   {id: 2, upVotes: 89},
//   {id: 3, upVotes: 1}
// ];
// const totalUpvotes = posts.reduce((totalUpvotes, currentPost) => {
//   console.log(totalUpvotes);
//   return totalUpvotes + currentPost.upVotes;
// }, 0);
//
//
// totalUpvotes();


var arr = [1, 2, 3, 4];

let sum = arr.reduce((x,y) => {
  console.log(x + "  " + y);
  return  x + y;
}, 5);


console.log(sum);
