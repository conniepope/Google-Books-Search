const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");


// Require all models
const db = require("./models");

// Logger - morgan is used to log our HTTP Requests. 
// By setting morgan to 'dev' the :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Define API routes here
// * `/api/books` (get) - Should return all saved books as JSON.
app.get("/api/books", (req, res) => {
  db.Book.find({}) 
    .then(function(dbBook) {
      res.json(dbBook);
    })
    .catch(function(err) {
      res.json(err);
    })
});

// * `/api/books` (post) - Will be used to save a new book to the database.
app.post("/api/books", (req, res) => {
  db.Book.create(req.body)
  .then(function(dbBook) {
    res.json(dbBook);
  })
  .catch(function(err) {
    res.json(err);
  });
});

// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
app.delete("/api/books/:id", (req, res) => {
  db.Book.remove({ _id: req.params.id })
  .then(function(error, removed) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(removed);
    }
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
