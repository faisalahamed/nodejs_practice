// const http = require("http");
const fs = require("fs");
const request = require("request-promise");

// const file = fs.createWriteStream("file.pdf");
// const request = http.get(
//   "http://www.iedcr.gov.bd/website/images/files/nCoV/Confirmed%20COVID-19%20cases_upto_20_April%202020_last.pdf",
//   function (response) {
//     response.pipe(file);
//   }
// );

request(
  "https://www.iedcr.gov.bd/website/images/files/nCoV/Confirmed%20COVID-19%20cases_upto_20_April%202020_last.pdf"
).pipe(fs.createWriteStream("cat.pdf"));
