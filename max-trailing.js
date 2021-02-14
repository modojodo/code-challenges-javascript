function maxTrailing(levels) {
  const differences = [];
  // Write your code here
  for( let i = 1; i < levels.length; i++) {
    const currentLevelValue = levels[i];
    console.log(currentLevelValue)
    for(let j = i-1; j >= 0; j--) {
      console.log(currentLevelValue > levels[j]);
      if(currentLevelValue > levels[j]) {
        differences.push(currentLevelValue - levels[j]);
      }
    }
  }
  console.log(differences);
  return differences.length ? Math.max(...differences) : -1;
}

console.log(maxTrailing([5, 3, 6, 7, 4]));