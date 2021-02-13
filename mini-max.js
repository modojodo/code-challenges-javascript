function miniMaxSum(arr) {
  const allSums = [];
  arr.forEach((val, i) => {
    const values = Array.from(arr)
    values.splice(i, 1);
    const sum = values.reduce((acc, val) => val += acc);
    allSums.push(sum);
  });

  console.log(Math.min(...allSums), Math.max(...allSums));
}
