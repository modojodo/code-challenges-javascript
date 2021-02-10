function foodTruckFestival(menuItems) {
  const uniqueMenuItems = new Set(menuItems.flat());

  const element = document.querySelector('#combined-menu')
  for (const menuItem of uniqueMenuItems) {
    const listItem = document.createElement('li');
    listItem.innerText = menuItem;
    element.appendChild(listItem);
  }
}

foodTruckFestival([["pizza", "pasta"], ["pizza", "calzones"], ["lobster"], ["calzones"]]);