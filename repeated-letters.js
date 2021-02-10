function repeatedString(s, n) {
  let givenString = '';
  while (givenString.length !== n) {
    const combinedLength = givenString.length + s.length;
    if (combinedLength > n) {
      const extraLength = combinedLength - n;
      const subString = s.slice(0, s.length - extraLength);
      givenString = givenString.concat(subString);
    } else {
      givenString = givenString.concat(s);
    }
  }
  const numOfLetter = givenString.split('').reduce((acc, val) => {
    if (val === 'a') {
      return acc += 1;
    }
    return acc;
  }, 0);
  return numOfLetter;
}

// console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));