import fs from "node:fs/promises";

const booksJsonString = await fs.readFile("src/kappale05/data/books.json", "utf-8");
const books = JSON.parse(booksJsonString);

const productsJsonString = await fs.readFile("src/kappale05/data/products.json", "utf-8");
const products = JSON.parse(productsJsonString);

const joinBooksAndProducts = (books, products) => {

  // console.log(books);
  // console.log(products);
  return books.map( book => {
    const product = products.find(product => product.isbnNumber === book.isbn);
    return product ? { ...book, ...product } : {...book};
  });
}

const joins  = joinBooksAndProducts(books, products);

console.log(joins);