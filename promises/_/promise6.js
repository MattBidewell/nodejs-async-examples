import { Examples } from "./exampleFunctions.js";

console.log("*****");
console.log("Promise.any");
console.log("*****");

const uploadProfilePicturePromise = Examples.uploadProfilePicture();
const uploadProfileBannerPromise = Examples.uploadProfileBanner();
const uploadProfileImageReject = Examples.uploadProfileImageReject();

Promise.any([
  uploadProfileBannerPromise,
  uploadProfilePicturePromise,
  uploadProfileImageReject,
])
  .then((arrayOfResponses) => {
    console.log(arrayOfResponses);
  })
  .catch((err) => {
    console.log(err);
  });
