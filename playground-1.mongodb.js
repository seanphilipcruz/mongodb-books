/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('books').insertMany([
  {
    "_id" : ObjectId("5f8f8c44d3a3a925c0e4f25e"),
    "book_title" : "To Kill a Mockingbird",
    "book_author" : "Harper Lee",
    "book_isbn" : "9780060935467"
  },
  {
    "_id" : ObjectId("5f8f8c44d3a3a925c0e4f25f"),
    "book_title" : "1984",
    "book_author" : "George Orwell",
    "book_isbn" : "9780451524935"
  },
  {
    "_id" : ObjectId("5f8f8c44d3a3a925c0e4f260"),
    "book_title" : "The Great Gatsby",
    "book_author" : "F. Scott Fitzgerald",
    "book_isbn" : "9780743273565"
  },
  {
    "_id" : ObjectId("5f8f8c44d3a3a925c0e4f261"),
    "book_title" : "The Catcher in the Rye",
    "book_author" : "J.D. Salinger",
    "book_isbn" : "9780316769488"
  }
]);

/*// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);*/
