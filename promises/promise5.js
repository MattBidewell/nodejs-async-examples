import { Examples } from "./exampleFunctions.js";

console.log("*****");
console.log("Promise.race");
console.log("*****");

const uploadProfilePicturePromise = Examples.uploadProfilePicture(); // takes 2 seconds
const uploadProfileBannerPromise = Examples.uploadProfileBanner(); // takes 3 seconds

Promise.race([uploadProfileBannerPromise, uploadProfilePicturePromise])
  .then((firstToFinish) => {
    console.log(firstToFinish);
  })
  .catch((err) => {
    console.log(err);
  });
