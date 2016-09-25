var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");





// Start looping
for (var i = 0; i < loopCount; i += 1) {
  currentBand = bands[i];
  bandElement.innerHTML += "<li>" + currentBand + "</li>";
}
for (var i = 0; i < vegetables.length; i++) {
  currentVeggie = vegetables[i];
  veggieElement.innerHTML += "<li>" + currentVeggie + "</li>";
}

