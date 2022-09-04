
// It returns a _number_ that represents the number of book objects inside of the array.


function getTotalBooksCount(array) {
  // let result = books.reduce((total, book) => total + book);
  return lengthHelper(array);
}

// It returns a _number_ that represents the number of account objects inside of the array.


function getTotalAccountsCount(accounts) {
  return accounts.length
}

function lengthHelper (books) {
  return books.length
} 
// It returns a _number_ that represents the number of books _that are currently checked out of the library.
// _ This number can be found by looking at the first transaction object in the `borrows` array of each book. 
// If the transaction says the book has not been returned (i.e. `returned: false`), 
// the book is currently being borrowed.

function getBooksBorrowedCount(books) {
  let result = 0;
  // loops through the books
  books.forEach((book) => {
  // look at book.borrows[0]
  if(book.borrows[0].returned === false) {
    result++ 
  }
})
return result;
}


// It returns an array containing five objects or fewer that represents the most common 
// occurring genres, ordered from most common to least.

// Each object in the returned array has two keys:

// - The `name` key which represents the name of the genre.
// - The `count` key which represents the number of times the genre occurs.

// Even if there is a tie, the array should only contain no more than five objects.

function getMostCommonGenres(books) {
  //create a return array that grabs the genres from book array
  let genres = books.map((book) => book.genre);
  //create an empty array
  const arr = [];
  //loop through genres 
  genres.forEach((element) => {
   let answer = arr.find((res) => res.name === element);
    if (answer != null) {
      answer.count++
    }
    arr.push({name:element, count: 1});
  });
  return arr.sort((a, b) => b.count - a.count).slice(0,5)
}


// It returns an array containing five objects or fewer that represents the most common occurring genres,
//  ordered from most common to least.

// Each object in the returned array has two keys:

// - The `name` key which represents the name of the genre.
// - The `count` key which represents the number of times the genre occurs.

// Even if there is a tie, the array should only contain no more than five objects.

function getMostPopularBooks(books) {
  
   let popularBooks = [];
  
  const borrows = books.reduce((acc, book) => {
       popularBooks.push({ name: book.title,
                 count: book.borrows.length });
          }, []);
  
  return popularBooks.sort((countA, countB) =>
          (countA.count < countB.count ? 1 : -1))
          .slice(0, 5);

}


// It returns an array containing five objects or fewer that represents the most popular
//  authors whose books have been checked out the most. 
//  Popularity is represented by finding all of the books written by the author
//   and then adding up the number of times those books have been borrowed.

// Each object in the returned array has two keys:

// - The `name` key which represents the first and last name of the author.
// - The `count` key which represents the number of times the author's books have been borrowed.

// Even if there is a tie, the array should contain no more than five objects.

function getMostPopularAuthors(books, authors) {
    const popularAuthors = [];
    for (let author of authors) {
       const authorName = `${author.name.first} ${author.name.last}`;
       let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
        const authorObj = { name: authorName, count: count };
    popularAuthors.push(authorObj);
  }

  return popularAuthors.sort((countA, countB) =>
          (countA.count < countB.count ? 1 : -1))
          .slice(0, 5);
}

 /* let borrowed = books.map((book) => book.title);
  const arr = [];
  authors.forEach((element) => {
   let answer = arr.find((res) => res.borrows === element);
    if (answer != null) {
      answer.count++
    }
    arr.push({name:element, count: 1});
  });
  return arr.sort((a, b) => a.count - b.count).slice(0,5)*/

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
