'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function isUpperCase(str) {
  const seen = {};
  const isUpper = []
  for( let i=0; i < str.length; i++) {
    const char =  str.charCodeAt(i);

    if(seen[char] || !(char >= 65 && char<= 90)) {
      return false;
    }
    seen[char] = true;

  }


  return true;
}

/*
 * Complete the 'countCounterfeit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY serialNumber as parameter.
 */

function countCounterfeit(serialNumber) {
  // Write your code here

  const currencyDenomination = [10, 20, 50, 100, 200, 500, 1000];
  const currencySum = serialNumber.reduce((acc, num) => {
    if(num.length >= 10 && num.length <= 12) {
      console.log('first')
      const firstThreeLetters = num.slice(0, 3);
      // console.log(firstThreeLetters)
      if(isUpperCase(firstThreeLetters)) {
        console.log('second')
        const year = +num.slice(3, 7);
        const isValidYear = year && (year >= 1900 && year <=2019);
        if(isValidYear) {
          console.log('third')
          const currency = +num.slice(7, num.length - 1);
          console.log(currency)
          if(currency && currencyDenomination.includes(currency)) {
            console.log('fourth')
            if(isUpperCase(num[num.length - 1])) {
              // console.log(currency);
              console.log('fifth')
              acc += currency;
            }
          }
        }
      }
    }
    return acc;
  }, 0);

  return currencySum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const serialNumberCount = parseInt(readLine().trim(), 10);

  let serialNumber = [];

  for (let i = 0; i < serialNumberCount; i++) {
    const serialNumberItem = readLine();
    serialNumber.push(serialNumberItem);
  }

  const result = countCounterfeit(serialNumber);

  ws.write(result + '\n');

  ws.end();
}
