const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  const databaseResponse = null;
  res.json(databaseResponse);
  //   res.send(books);
  //   res.json(books);
});

app.listen(3000);
