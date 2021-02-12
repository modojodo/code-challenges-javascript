function diagonalDifference(arr) {
  // Write your code here
  let primarySum =  0;
  let secondarySum =  0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i];
    secondarySum += arr[i][(arr[i].length - 1) - i]
  }

  return Math.abs(primarySum - secondarySum);
}