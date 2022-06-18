/**
 * Handling Promises.
 *
 * The following code represents examples of how to
 * handle promises.
 */

import { readFile } from "fs/promises"; // use the promise version of fs.

// Without using async await, to handle a promise you
// need to chain.then(), .catch() or.finally()
function main() {
  readFile("../data.txt", "utf8")
    .then((data) => {
      console.log("file loaded");
      console.log(data);
    })
    .catch((err) => {
      console.log("opps error");
      console.error(err);
    })
}

// what do you think will execute first?
console.log("**** PROMISE **** ");
console.log("line 1");
main();
console("line 2")