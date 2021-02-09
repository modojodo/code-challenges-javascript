function clock(element) {
  const clockElement = document.querySelector('#clock');
  setInterval(() => {
    const date = new Date();
    clockElement.innerText = date.toLocaleTimeString();
  }, 1000);
}

clock();