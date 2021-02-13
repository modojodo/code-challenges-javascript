function birthdayCakeCandles(candles) {
  const tallestCandle = Math.max(...candles);
  let total = 0;
  while (candles.indexOf(tallestCandle) >= 0){
    total++
    candles.splice(candles.indexOf(tallestCandle), 1);
  }
  return total;
}
