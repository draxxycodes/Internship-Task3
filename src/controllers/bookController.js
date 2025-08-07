let books = [];
let currentId = 1;

const getAllBooks = (req, res) => {
    res.json(books);
};

const addBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: currentId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    book.title = title;
    book.author = author;
    res.json(book);
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(b => b.id === parseInt(id));

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(bookIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};