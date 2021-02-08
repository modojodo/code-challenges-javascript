import Bookstore from "./Bookstore";

class TechBookstore extends Bookstore {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}.`;
  }
}

const CrackingTheCodingInterview = new TechBookstore(
  "Cracking The Coding Interviw",
  "Gayle Laackman McDowell",
  1209123,
  7,
  2.3);

console.log(CrackingTheCodingInterview.getEdition());