// It returns the author object that has the matching ID.

function findAuthorById(authors, id) {
  let result = authors.find((found) => {
    if (found.id === id) {
      return found;
    }
  });
  return result;
}

// It returns the book object that has the matching ID.

function findBookById(books, id) {
  let result = books.find((found) => {
    if (found.id === id) {
      return found;
    }
  });
  return result;
}

// It returns an array with two arrays inside of it.
// All of the inputted books are present in either the first or second array.

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter((book) => !book.borrows[0].returned);
  return [unreturned, returned];
  //loop through books
//   books.forEach((book) => {
//     if (book.borrows[0].returned === false) {
//       checkedOut.push(book);
//     }
//   });
//   books.forEach((book) => {
//     if (book.borrows[0].returned === true) {
//       checkedIn.push(book);
//     }
//   });
//   allBooks.push(...checkedOut, ...checkedIn);
//   console.log(allBooks);
//   return allBooks;
}



// It should return an array of ten or fewer account objects that represents the accounts
//  given by the IDs in the provided book's `borrows` array.
//  However, each account object should include the `returned` entry from the corresponding transaction
//   object in the `borrows` array.

function getBorrowersForBook(book, accounts) {
 const result = book.borrows.map((borrow) =>{
   let acc = accounts.find((account) => account.id === borrow.id);
   return {...borrow, ...acc};
 });
 return result.slice(0,10)
}  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};