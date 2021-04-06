const express = require("express");
const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

const app = express();
const port = 3000;

async function main() {
  const corona = [];

  const html = await request.get("https://www.iedcr.gov.bd/");
  fs.writeFileSync("./test.html", html);
  let $ = await cheerio.load(html);

  const arr = [];
  const theText = $("h3").each((index, element) => {
    arr.push($(element).text().trim());
  });
  let sliced = arr.splice(2, arr.length); //from index 3 to 2 index

  const updated = $(
    'table[class="table table-hover"] > thead>tr>th:first-child'
  ).text();
  const testlast24 = $(
    'table[class="table table-hover"] > tbody>tr:first-child>td:last-child'
  ).text();
  const totaltest = $(
    'table[class="table table-hover"] > tbody>tr:nth-child(2)>td:last-child'
  ).text();
  const positivelast24 = $(
    'table[class="table table-hover"] > tbody>tr:nth-child(3)>td:last-child'
  ).text();
  const totalcoviccase = $(
    'table[class="table table-hover"] > tbody>tr:nth-child(4)>td:last-child'
  ).text();

  const p = updated.split(" ");

  const date = makeObj("Updated", p[2]);
  const newpatient = makeObj("Positive cases in last 24 hours", positivelast24);
  const newdeath = makeObj("Death in last 24 hours", sliced[2]);
  const newrecover = makeObj("Recovered in last 24 hours", sliced[0]);
  const newtest = makeObj("Test conducted in last 24 hours", testlast24);
  const totalcase = makeObj("Total cases", totalcoviccase);
  const totaldeath = makeObj("Total Death", sliced[3]);
  const totalrecover = makeObj("Total Recovered", sliced[1]);
  const totaltested = makeObj("Total test conducted", totaltest);

  corona.push(date);
  corona.push(newpatient);
  corona.push(newdeath);
  corona.push(newrecover);
  corona.push(newtest);
  corona.push(totalcase);
  corona.push(totaldeath);
  corona.push(totalrecover);
  corona.push(totaltested);

  return corona;
}

app.get("/", (req, res, next) => {
  let corona = main().then((val) => {
    res.send(val);
  });
});

function makeObj(title, value) {
  return {
    title,
    value,
  };
}

app.listen(port, () => console.log(`Example app listening at :${port}`));
