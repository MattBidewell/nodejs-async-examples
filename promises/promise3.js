import { Examples } from "./exampleFunctions.js";

console.log("*****");
console.log("Promise.all");
console.log("*****");

const uploadProfilePicturePromise = Examples.uploadProfilePicture();
const uploadProfileBannerPromise = Examples.uploadProfileBanner();

Promise.all([uploadProfileBannerPromise, uploadProfilePicturePromise]).then(
  (arrayOfResponses) => {
    console.log(arrayOfResponses);
  }
);
