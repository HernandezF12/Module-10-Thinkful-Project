function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
}

// It returns a sorted array of the provided account objects.
// The objects are sorted alphabetically by last name.

function sortAccountsByLastName(accounts) {
  // let last = accounts.name.lastname;
  let result = accounts.sort((nameA, nameB) =>
    nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
  );
  return result;
}

// It returns a _number_ that represents the number of times the
//  account's ID appears in any book's `borrows` array.

function getTotalNumberOfBorrows(account, books) {
  // run though books array
  let sum = 0;

   books.forEach((book) => {
  // let identification = amount.borrows;
    book.borrows.forEach(borrow => {
    if (borrow.id === account.id) {
      sum++
    }
    })
      })
    return sum;
}

// It returns an array of book objects, including author information,
// that represents all books _currently checked out_ by the given account.
//  _Look carefully at the object below,
//  _ as it's not just the book object; the author object is nested inside of it.

function getBooksPossessedByAccount(account, books, authors) {  
  
   let result = [];
 let borrowMatch = [];
 books.forEach((bookiter) => {
  const borrowed = bookiter.borrows;
  const book = {
   id: bookiter.id,
   title: bookiter.title,
   genre: bookiter.genre,
   authorId: bookiter.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
   book.borrows = borrowMatch;
  book.author = authors.filter((author) => author.id === book.authorId)[0];
   }
  });
 });
  console.log(result)
 return result;

  /*//create returning array
  const result = [];
  let bookBorrowed = books.find((book) => {
      if (account.id === book.borrows.id) {
        result.push(books)
      }
      let findingAuthor = authors.find((author) => {
      if (book.authorId === author.id){
        result.push(author)
      }
      })
      })
  return result; */
  
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
