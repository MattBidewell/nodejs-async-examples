/**
 * Async functions that resolve after a short timeout.
 * Notes:
 *    setTimeout takes a call back which is executed after a timeout.
 *    as part of the timers API. Node v18 will bring promises
 *    native to the timer API.
 *    https://nodejs.org/api/timers.html
 */
export class Examples {
  static uploadProfileBanner() {
    return new Promise((resolve, reject) => {
      const threeSeconds = 3 * 1000;
      setTimeout(() => {
        resolve("Profile banner uploaded!");
      }, threeSeconds);
    });
  }

  static uploadProfilePicture() {
    return new Promise((resolve, reject) => {
      const twoSeconds = 2 * 1000;
      setTimeout(() => {
        resolve("Profile picture uploaded!");
      }, twoSeconds);
    });
  }

  static uploadProfileImageReject() {
    return new Promise((resolve, reject) => {
      const fiveSeconds = 5 * 1000;
      setTimeout(() => {
        reject("Opps something went wrong!");
      }, fiveSeconds);
    });
  }
}
