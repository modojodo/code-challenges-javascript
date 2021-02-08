class Bookstore {
  constructor(
    title,
    author,
    ISBN,
    numCopies
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get getAvailability() {
    const { numCopies } = this;
    if (!numCopies) {
      return 'out of stock';
    } else if (numCopies < 10) {
      return 'low stock'
    }
    return 'In stock';
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const HungerGames = new Bookstore("Hunger Games", "Suzane Collins", 123919, 5);

console.log(HungerGames.getAvailability);
HungerGames.restock(12);
console.log(HungerGames.getAvailability);
HungerGames.sell(17);
console.log(HungerGames.getAvailability);
