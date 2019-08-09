//
// function removeGarbage() {
//   console.log("Removing garbage");
//   //callback1;
// }
//
// function doActivities(text, callback) {
//     console.log(text);
//     callback;
// }
// //
// //
// //
// function getIceCream(callback1) {
//   console.log("Room Cleaned & Garbage Removed");
// //  callback1();
// }
//
// function activityCompleted(callback) {
//   console.log("Activity Completed");
// }

//doActivities('Clean Room',removeGarbage(getIceCream(activityCompleted)));
// doActivities('Clean Room')


//doActivities('Clean', removeGarbage);

// function printString(string, callback){
//   setTimeout(
//     () => {
//       console.log(string)
//       callback();
//     },
//     Math.floor(Math.random() * 100) + 1
//   )
// }
//
// function printAll(){
//   printString("Clean Room", () => {
//     printString("Remove Garbage", () => {
//        printString("Won Ice Cream", () => {})
//      })
//   })
// }
// printAll()



function doActivities(text, callback) {
   console.log(text);
   callback();
}

function cleanRoom() {
  console.log("Room Cleaned");
}


doActivities('Doing Activity', cleanRoom);
