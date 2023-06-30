const { error } = require("console");
const fs = require("fs");
const { json } = require("stream/consumers");

const data = fs.readFileSync("./ressources/input.txt", "utf8");

const data2 = fs.readFileSync("./ressources/inputtrial.txt", "utf8");

let newData = data.split("\n");
console.log(newData);
let Calories = [];
let sum = 0;

for (i in newData) {
  if (newData[i] != "") {
    sum += parseInt(newData[i]);
  } else {
    Calories.push(sum);
    sum = 0;
  }
}
Calories.push(sum);
console.log(Calories);

let Max = 0;
let IndexOfMax = 0;

let Max2 = 0;
let IndexOfMax2 = 0;

let Max3 = 0;
//First Max
for (i in Calories) {
  if (Calories[i] > Max) {
    Max = Calories[i];
    IndexOfMax = i;
  }
}
Calories.splice(IndexOfMax, 1);
//Second Max
for (i in Calories) {
  if (Calories[i] > Max2) {
    Max2 = Calories[i];
    IndexOfMax2 = i;
  }
}
Calories.splice(IndexOfMax2, 1);

//Third Max
for (i in Calories) {
  if (Calories[i] > Max3) {
    Max3 = Calories[i];
  }
}

console.log(Max, Max2, Max3);

console.log(Max + Max3 + Max2);
