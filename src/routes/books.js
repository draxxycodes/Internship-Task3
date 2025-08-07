const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET / - Retrieve all books
router.get('/', bookController.getAllBooks);

// POST / - Add a new book
router.post('/', bookController.addBook);

// PUT /:id - Update a book by ID
router.put('/:id', bookController.updateBook);

// DELETE /:id - Remove a book by ID
router.delete('/:id', bookController.deleteBook);

module.exports = router;