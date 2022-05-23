import { readFile } from "node:fs/promises";

function processData() {
  const file = readFile("../data.txt", "utf-8").then((data) => {
    return data;
  });
  return file;
}

processData().then((file) => {
  console.log(file);
});
