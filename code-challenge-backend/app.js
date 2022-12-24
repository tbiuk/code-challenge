const express = require("express");
const app = express();
const port = 3000;

const login = require("./login");
const encoder = require("./encoder/encoder");

app.use(express.json());

app.post("/login", login);

app.get("/encoder", (req, res) => {
  try {
    const { str } = req.query;
    const result = encoder(str);
    res.status(200).send({ result });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
