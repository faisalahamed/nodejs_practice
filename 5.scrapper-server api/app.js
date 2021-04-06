const express = require("express");
const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

const app = express();
const port = 3000;

async function main() {
  const html = await request.get("https://www.iedcr.gov.bd/");
  // const html = await request.get(
  //   "https://reactnativetutorial.net/css-selectors/lesson2.html"
  // );
  fs.writeFileSync("./test.html", html);
  const $ = await cheerio.load(html);
  // const theText = $("h2").text();
  // console.log(theText);
  const arr = [];
  const theText = $("h3").each((index, element) => {
    arr.push($(element).text());
  });
  let sliced = arr.splice(2, arr.length); //from index 3 to 2 index

  const x = $(".table td");
  // const y = x.split("+");
  var arr2 = [];
  // console.log(x.find("td").text());
  var p = x.each((index, element) => {
    arr2.push($(element).text());
  });
  // console.log(arr2);
  for (let index = 3; index < arr2.length; index += 4) {
    // console.log(arr2[index]);
    sliced.push(arr2[index]);
  }
  // console.log(typeof sliced);
  return sliced;
}

app.get("/", (req, res, next) => {
  const fval = [];
  let corona = main().then((val) => {
    fval.push(val);
    console.log("value fteched!!!");
    res.send(fval);
  });
});

app.listen(port, () => console.log(`Example app listening at :${port}`));
