function plusMinus(arr) {
  const numType = {
    positive: 0,
    negative: 0,
    neutral: 0,
  };

  arr.forEach(val => {
    if(val === 0) {
      numType.neutral++;
    } else if(val < 0 ) {
      numType.negative++;
    } else if( val > 0) {
      numType.positive++;
    }
  });

  for (const type in numType) {
    console.log(numType[type] / arr.length);
  }

}