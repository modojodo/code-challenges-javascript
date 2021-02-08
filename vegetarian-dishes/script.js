const dishes = [{
  name: "Eggplant Parmesan",
  vegetarian: true,
},
  {
    name: "Spaghetti & Meatballs",
    vegetarian: false,
  },
  {
    name: "Tiramisu",
    vegetarian: true
  }];

function vegetarianMenu(menu) {
  const menuNode = document.querySelector('#menu');
  const vegetarianOptions = menu.filter(menu => menu.vegetarian === true);

  vegetarianOptions.forEach(option => {
    const dish = document.createElement('li');
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  })
}

vegetarianMenu(dishes);