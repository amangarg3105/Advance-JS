// const processImage = () => {
//
//   console.log('Image processed');
// }
// const networkRequest = (url) => {
//
//   return url;
// }
// const greeting = () => {
//   console.log('Hello World');
// }
// processImage();
// console.log(networkRequest('www.somerandomurl.com'));
// greeting();



const networkRequest = () => {
  setTimeout(() => {
    console.log('NetWork Code');
  }, 0);
};

const processImage = () => {
  setTimeout(() => {
    console.log('Process Image ');
  }, 0);
};

processImage();
console.log('Hello World');
networkRequest();
console.log('The End');
