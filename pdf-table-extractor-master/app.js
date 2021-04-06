const pdftextreader = require("pdf-text-reader");

async function run() {
  const arr = [];
  const readPdf = await pdftextreader.readPdfText("sample.pdf");
  //   const arryOfString = await pagesToArray(pages[0]);
  console.log(readPdf);

  for (const key in readPdf[0].lines) {
    // console.log(pages[0].lines[key].split(" "));
    for (const iterator of readPdf[0].lines[key].split(" ")) {
      if (iterator != "") {
        // console.log(iterator);
        arr.push(iterator);
      }
    }
  }
  return arr;
}

run().then((val) => {
  //   console.log(val);
  const citylist = [
    // "Dhaka City",
    "City",
    "Dhaka (District)",
    "Gazipur",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Narayanganj",
    "Munshigonj",
    "Narshingdi",
    "Rajbari",
    "Faridpur",
    "Tangail",
    "Shariatpur",
    "Gopalganj",
    "Chattogram",
    "Cox’s bazar",
    "Cumilla",
    "Baria",
    "Laksmipur",
    "Bandarban",
    "Noakhali",
    "Feni",
    "Chandpur",
    "Moulovi Bazar",
    "Sunamganj",
    "Hobiganj",
    "Sylhet",
    "Rangpur",
    "Gaibandha",
    "Nilphamari",
    "Lalmonirhat",
    "Kurigram",
    "Dinajpur",
    "Panchagar",
    "Thakurgaon",
    "Khulna",
    "Jessore",
    "Bagerhat",
    "Narail",
    "Chuadanga",
    "Mymensingh",
    "Jamalpur",
    "Netrokona",
    "Sherpur",
    "Barishal",
    "Potuakhali",
    "Pirojpur",
    "Joypurhat",
    "Pabna",
    "Bogra",
    "Naogaon",
    "Sirajganj",
    "Rajshahi",
  ];
  // console.log(val.indexOf(citylist[6]));
  for (const city of citylist) {
    if (val.indexOf(city) > 0) {
      //   console.log(`${city} :${val[val.indexOf(city) + 1]}`);
      let obj = objectMaker(city, val[val.indexOf(city) + 1]);
      console.log(obj);
      //   arro.push(obj);
    }
  }
});

function objectMaker(city, number) {
  return {
    city,
    number,
  };
}
