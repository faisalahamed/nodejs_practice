const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

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
  const sliced = arr.splice(2, arr.length); //from index 3 to 2 index
  const obj = sliced.map((input) => {
    let newObj = { id: input };
    return newObj;
  });
  console.log(obj);
}

main();
