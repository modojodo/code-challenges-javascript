function staircase(n) {
  for(let i=0 ; i< n ; i++) {
    const stair = new Array(n).fill(' ');
    console.log(stair.fill('#', (stair.length - i - 1) ).join(''));
  }
}

staircase(6);