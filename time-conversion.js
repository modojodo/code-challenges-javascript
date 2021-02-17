function timeConversion(s) {
  /*
   * Write your code here.
   */
  const splittedStr = s.split(':');
  const period = splittedStr[2].slice(splittedStr[2].length -2);
  const hour = +splittedStr[0];
  const totalHours = 24;
  switch (period) {
    case 'PM':
      if( hour === 12) {
        return  s.slice(0, s.length -2)
      } else {
        console.log('here')
        return  `${totalHours - 12 + hour }${s.slice(2, s.length -2)}`
      }
    case 'AM':
      if( hour === 12) {
        return  `00${s.slice(2, s.length -2)}`;
      } else {
        splittedStr[0] = hour;
        splittedStr[2] = splittedStr[2].slice(0, splittedStr[2].length -2)
        return `0${splittedStr.join(':')}`;
      }
  }
}


console.log(timeConversion('12:59:59AM'))
// 04:59:59AM
