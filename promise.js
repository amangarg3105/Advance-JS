function printString(string){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
       console.log(string)
       resolve('');
     },0)
  })
}

// function printAll(){
//   printString("Clean Room");
//   .then(() => {
//     return printString("Remove Garbage");
//   })
//   .then(() => {
//     return printString("Won Icream");
//   })
// }
// printAll()


async function printAll(){
  console.log("Doing Activity");
  await printString("Clean Room")
  await printString("Remove Garbage")
  await printString("Won Icream")
}


printAll();


// const promise1 =  new Promise(function(resolve, reject) {
//   let name;
//   setTimeout(() => {
//     name = 'Aman';
//     var arr = [1,2];
//     reject(name)
//   }, 1000)
// });
//
//
//
// promise1.then((arr) => {
//     console.log(arr);
// }).catch(error => {
//   console.log(error);
// })
