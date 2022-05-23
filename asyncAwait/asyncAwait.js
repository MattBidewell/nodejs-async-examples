import { readFile } from "node:fs/promises";

async function readFileAsyncAwait() {
  const data = await readFile("../data.txt", "utf-8");
  console.log("I have the data!!");
}

console.log("**** ASYNC AWAIT ****");
console.log("Whats first?");
readFileAsyncAwait();
console.log("or this...");
