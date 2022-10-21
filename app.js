console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favoriteNumber = 5;
let guessNumber = prompt("What is the magic number?");

if (guessNumber == favoriteNumber) {
  console.log("That is correct!");
} else if (guessNumber < favoriteNumber) {
  console.log("Too low");
} else if (guessNumber > favoriteNumber) {
  console.log("Too high"); 
} 

let birthMonth = prompt("What is your birth month?");

switch (birthMonth){
    case "dec" :
    case "jan" :
    case "feb" :
      console.log ("Born in Winter");
      break;
    case "mar" :
    case "apr" :
    case "may" :
      console.log("Born in Spring");
      break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01" :
    type = "Tank top";
    break;
    case "02" :
      type = "T-Shirt";
    case "03" :
      type = "Long Sleeve";
    case "04" :
      type = "Sweat Shirt";
    case "05" :
      type = "Other";
}

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

switch (colorId) {
  case "BL" :
    color = "Black";
    break;
  case "BL" :
    color = "Blue";
    break;
  case "RD" :
    color = "Red";
    break;
  case "PU" :
    color = "Purple"
  break;
  default:
    color = "White";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (sizeId) {
  case "S" :
    size = "Small";
    break;
  case "M" :
    size = "Medium";
    break;
  case "L" :
    size = "Large";
  case "XL" :
    size = "Extra Large" ;
    break;
  default:
    size = "One Size Fits All";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}
