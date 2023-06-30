const fs = require("fs");
const data = fs.readFileSync("./ressources/day1.txt", "utf8");

let newData = data.split("\r\n");
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
for (i in Calories) {
  if (Max < Calories[i]) {
    Max = Calories[i];
    IndexOfMax = i;
  }
}

Calories.splice(IndexOfMax, 1);

let Max2 = 0;
let IndexOfMax2 = 0;
for (i in Calories) {
  if (Max2 < Calories[i]) {
    Max2 = Calories[i];
    IndexOfMax2 = i;
  }
}

Calories.splice(IndexOfMax2, 1);

let Max3 = 0;
for (i in Calories) {
  if (Max3 < Calories[i]) {
    Max3 = Calories[i];
  }
}
console.log(Max, Max2, Max3);
console.log(Max + Max2 + Max3);
