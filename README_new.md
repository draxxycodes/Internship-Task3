# Book Management API

A RESTful API built with Node.js and Express for managing a book collection. This project demonstrates basic CRUD operations and RESTful principles.

## Features

- Create new books
- Retrieve all books
- Update existing books
- Delete books
- In-memory data storage
- Error handling
- Request logging

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Postman (for testing)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to project directory:
   ```bash
   cd book-management-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server with:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Documentation

### 1. Get All Books
- **Method:** GET
- **URL:** `/books`
- **Success Response:**
  ```json
  [
      {
          "id": 1,
          "title": "Wings of Fire",
          "author": "APJ Abdul Kalam"
      }
  ]
  ```

### 2. Add a New Book
- **Method:** POST
- **URL:** `/books`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Request Body:**
  ```json
  {
      "title": "The Guide",
      "author": "R.K. Narayan"
  }
  ```
- **Success Response:** Status 201
  ```json
  {
      "id": 2,
      "title": "The Guide",
      "author": "R.K. Narayan"
  }
  ```

### 3. Update a Book
- **Method:** PUT
- **URL:** `/books/:id`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Request Body:**
  ```json
  {
      "title": "Updated Title",
      "author": "Updated Author"
  }
  ```
- **Success Response:** Status 200
- **Error Response:** Status 404 if book not found

### 4. Delete a Book
- **Method:** DELETE
- **URL:** `/books/:id`
- **Success Response:** Status 204
- **Error Response:** Status 404 if book not found

## Testing with Different Tools

### Using Postman
1. Create a new collection
2. Add requests for each endpoint
3. Set appropriate headers and body
4. Send requests and verify responses

### Using PowerShell
```powershell
# Get all books
Invoke-RestMethod -Uri "http://localhost:3000/books" -Method Get

# Add a book
$book = @{
    title = "The Great Gatsby"
    author = "F. Scott Fitzgerald"
} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:3000/books" -Method Post -Body $book -ContentType "application/json"
```

### Using cURL
```bash
# Get all books
curl http://localhost:3000/books

# Add a book
curl -X POST http://localhost:3000/books \
     -H "Content-Type: application/json" \
     -d "{\"title\":\"The Guide\",\"author\":\"R.K. Narayan\"}"
```

## Project Structure
```
book-management-api/
├── src/
│   ├── app.js                 # Application entry point
│   ├── controllers/
│   │   └── bookController.js  # Book operations logic
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling middleware
│   ├── routes/
│   │   └── books.js          # Book routes definitions
├── package.json
└── README.md
```

## Status Codes

- **200:** Success (GET, PUT)
- **201:** Created (POST)
- **204:** No Content (DELETE)
- **400:** Bad Request
- **404:** Not Found
- **500:** Server Error

## Error Handling

The API includes comprehensive error handling:
- Invalid request validation
- Resource not found errors
- Server errors with appropriate status codes
- Consistent error response format

## Technologies Used

- Node.js
- Express.js
- body-parser

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the ISC License.
