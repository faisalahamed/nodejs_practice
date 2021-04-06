const express = require("express");
const app = express();
// app.set("port", process.env.PORT);
const port = 3000;

console.log(port);

app.get("/", (req, res, next) => {
  res.send("hello");
});

app.listen(port, () => console.log(`Example app listening at :${port}`));
