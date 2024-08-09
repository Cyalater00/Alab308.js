// === Part 1 ===//
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// === Part 2 ===//
// A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!

let n = 4;

while (true) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && n > 1) {
    console.log(n);
    break;
  }
  n++;
}

// === Part 3 ===//
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let currentCell = "";
let currentRow = [];

for (let i = 0; i < csvString.length; i++) {
  if (csvString[i] === ",") {
    currentRow.push(currentCell.trim());
    currentCell = "";
  } else if (csvString[i] === "\n") {
    currentRow.push(currentCell.trim());
    console.log(currentRow.join(", "));
    currentRow = [];
    currentCell = "";
  } else {
    currentCell += csvString[i];
  }
}

if (currentCell.length > 0) {
  currentRow.push(currentCell.trim());
  console.log(currentRow.join(", "));
}