/**
 * Olivia Gauthier
 * IGME-102: 10-2 Filter Display, 11/05/23
 * Filter and Display with Higher-order array methods
 */

"use strict"; //catch some common coding errors

/* Global variables */
let numFormat = {};
let censusTract = [];

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
   textSize(3);
   text("Waiting...", 100, 100);
   loadJSON("media/nyPlacesHealthTracts (1).json", readTracts);
   format();
}

/**
 * draw :
 */
function draw() {
}

function keyPressed() {
   update();
}

function update() {
   background("beige");

   let localArray;

   if (key == 1) {
      localArray = censusTract.filter(tract => {return tract.risks["Sleep <7 hours"] > 35});
   } else if (key == 2) {
      localArray = censusTract.filter(tract => {return tract.disabilities["Hearing Disability"] > 5});
   } else {
      localArray = censusTract;
   }


   localArray.forEach(item => {
      item.display()
   });
}

function readTracts(fileStrings) {
   //console.log("got", fileStrings);
   let temp;

   for (let line of fileStrings) {
      temp = new Census(line);
      censusTract.push(temp);
   }

   update();
}

function printTract(tractObj) {
   //console.log("print", tractObj);
   //console.log(tractObj.state, tractObj.tract, "population:", numFormat.num.format(tractObj.population), "=>", numFormat.pct.format(tractObj.white/tractObj.population), "white", "\n", numFormat.pct.format(tractObj.assisted/tractObj.population), "receive public assistance, with a", numFormat.cur.format(tractObj.medianIncome), "median household income", "\n", "Located at (" + numFormat.num.format(tractObj.lon), ",", numFormat.num.format(tractObj.lat) + ")");
}

function format() {
   numFormat.num = Intl.NumberFormat();
   numFormat.pct = Intl.NumberFormat("us-EN", { style: 'percent' });
   numFormat.cur = new Intl.NumberFormat("us-EN", { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}
