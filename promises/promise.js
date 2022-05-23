import { readFile } from "node:fs/promises";

function readFilePromise() {
  readFile("../data.txt", "utf-8")
    .then((data) => {
      console.log("File loaded!");
    })
    .catch((err) => {
      console.log("opps error!");
      console.log(err);
    });
}
console.log("**** PROMISE ****");
console.log("whats first...");
readFilePromise();
console.log("or this?");
