const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

// Add request logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(bodyParser.json());
app.use('/books', bookRoutes);
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});