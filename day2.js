const { Socket } = require("dgram");
const fs = require("fs");
const data = fs.readFileSync("./ressources/day2.txt", "utf8");

let newData = data.split("\r\n");
console.log(newData);
//A Z
let sum = 0;
let rock = 0;
let scissors = 0;
let paper = 0;
function CompareString(s1, s2) {
  if (s1 == s2) {
    return true;
  }
  return false;
}
for (i in newData) {
  if (CompareString(newData[i], "C Y")) {
    rock += 1;
  }
  paper += 1;
}
sum = rock + paper + scissors;
console.log(sum);

console.log(CompareString(newData[0], "C Y"));
