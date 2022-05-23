import { readFile } from "node:fs/promises";

async function readFileAsyncAwait() {
  const data = await readFile("../data.txt", "utf-8");
  console.log("I got the data!!!");
}
console.log("**** ASYNC AWAIT 2 ****");
console.log("\n");
console.log("whats first?");
await readFileAsyncAwait(); // works because im on the current 16 LTS
console.log("or this?");
