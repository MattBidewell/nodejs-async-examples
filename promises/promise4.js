import { Examples } from "./exampleFunctions.js";

console.log("*****");
console.log("Promise.allSettled");
console.log("*****");

const uploadProfilePicturePromise = Examples.uploadProfilePicture();
const uploadProfileBannerPromise = Examples.uploadProfileBanner();
const uploadProfileImageReject = Examples.uploadProfileImageReject();

Promise.allSettled([
  uploadProfileBannerPromise,
  uploadProfilePicturePromise,
  uploadProfileImageReject,
])
  .then((arrayOfResponses) => {
    console.log(arrayOfResponses);
    console.log("non failed");
  })
  .catch((err) => {
    console.log(err);
  });
