import fs from "node:fs/promises";

const jsonString = await fs.readFile("src/kappale03/data/h5/books.json", "utf-8");
const books = JSON.parse(jsonString);

const matches = (book, str) => {
    console.log(`${book.title}/${str}`)
    const search = str.toLowerCase()
    return book.title &&
        book.title.toLowerCase().indexOf(search) !== -1
}

const findByTitle = (books, str) => 
    books.filter(book => matches(book, str))

const filteredBooks = findByTitle(books, 'iTt')
console.log(filteredBooks.length)
