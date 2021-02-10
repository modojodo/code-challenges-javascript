function coffeeCalculations(coffeeCosts) {
  const totalBill = coffeeCosts.reduce((acc, val) => acc += val);
  return `The total Bill is ${totalBill * 1.25}`;
}

console.log(coffeeCalculations([1, 3, 4, 6, 5, 10, 2.3]))