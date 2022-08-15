// 8/9/22 Tuesday Lab JS Total Recall
// Group members: Lana, Monica, Andreaya, Diamond
// ARRAYS AND CONTROL FLOW

// Section A
// What are the things in an array called? They are called elements
// Do Arrays guarantee those things will be in order? No, they don't.
// What real-life thing could you model with an array? Fruits in a basket.

// Section B
const quotes = ["Make things happy", "Never hold grudges", "Never look back"]
    
// Section C
const randomThings = [1, 10, "Hello", true]
randomThings[0];
randomThings[2] = "World";
console.log(randomThings);
  
// Section D
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2];
ourClass[4] = "Octocat";
ourClass.push("Cloud City");

// Section E
const myArray = [5, 10, 500, 20]
myArray.push("Aegon");
myArray.push("Spiderman");
myArray.shift();
myArray.unshift("Bob Marley");
  
myArray.pop();
myArray.prototype.reverse();

  
// Section F
let biggieSmalls = 15;
if (biggieSmalls < 100) {
    console.log("little number");
} else (biggieSmalls >= 100) {
    console.log("big number"); }
  
// Section G
let monkeyInTheMiddle = 20;
if (monkey < 5) {
    console.log("little number");
} else if (monkeyInTheMiddle > 10) {
    console.log("big number");
} else { console.log("monkey"); }
  
// Section H
const kristynsCloset = [ "left shoe", "cowboy boots", "right sock", "Per Scholas hoodie","green pants",
    "yellow knit hat", "marshmallow peeps"];
  
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
  
kristynsCloset.splice(6, 0, "raybans");
kristynsCloset[5] = "stained knit hat";
 
const thomsCloset = [["grey button-up", "dark grey button-up", "light blue button-up",
"blue button-up"], ["grey jeans", "jeans", "PJs"], ["wool mittens", "wool scarf", "raybans"]];

console.log(thomsCloset[0][0]);
console.log(thomsCloset[2][1]);
console.log(thomsCloset[2][1];)

console.log("Thom is looking fierce in a " + thomsCloset[2][1] + "", "" 
+ thomsCloset[0][1] + ' and ' + thomsCloset[3][2] + "!");
  
thomsCloset[1][2] = "Footie Pajamas";
