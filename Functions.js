// 8/9/22 Tuesday Lab JS Total Recall
// Group Members: Lana, Monica, Andreaya, Diamond
//Functions

// Section A
const printGreeting = (name) => {
return `Hello there, ${name}!`}
console.log(printGreeting("Slimer"));

// Section B
const printCool = (name) => {
return `${name} is cool`}
console.log(printCool("Captain Reynolds"));

// Section C
const calculateCube = (num) => {
return num * num * num }
console.log(calculateCube(5));

// Section D
const isVowel = (character) => {
if (character.toLowerCase() === "a" || character.toLowerCase() === "e"
|| character.toLowerCase() === "i" || character.toLowerCase() === "o" |
| character.toLowerCase() === "u") 
{return true
} else {
return false }}

// Section E
const getTwoLengths = (str0, str1) => {
let lengthArray = [];
lengthArray.push(str0.length, str1.length);
return lengthArray}
console.log(getTwoLengths("hat", "cap"));

// Section F
const getMultipleLengths = (string) => {
let arrayOfNumbers = [];
for (let i = 0; i < string.length; i++) {
 arrayOfNumbers.push(string[i].length)}
return arrayOfNumbers;}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Section G
const maxOfThree = (numb1, numb2, numb3) => {
if (numb1 === numb2 && numb2 === numb3 && numb1 === numb3) 
{ return numb1
} else if (numb1 >= numb2 && numb1 >= numb3) {
return numb1
} else if (numb2 >= numb1 && numb2 >= numb3) {
return numb2
} else {
return numb3}}

// Section H

const colors = ["blue", "purple", "pink", "indigo", "yellow", 
"orange", "fireengine red"]
const printLongestWord = (words) => {
    let longestWord = "";
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  console.log(printLongestWord(colors));


  