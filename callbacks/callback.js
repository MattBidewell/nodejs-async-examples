import { readFile } from "node:fs";

function readFileCallback() {
  console.log("(1) The data file?");
  readFile("../data.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  });
}

console.log("**** CALLBACK ****");
console.log("What happens next?");
readFileCallback();
console.log("(2) or this line?");
