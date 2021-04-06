var fs = require("fs");
var pdfreader = require("pdfreader");

new pdfreader.PdfReader().parseFileItems("sample.pdf", function (err, item) {
  if (err) callback(err);
  else if (!item) console.log("");
  else if (item.text) {
    // i.push(item.text);
    console.log(item.text);
  }
});
