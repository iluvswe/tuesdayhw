// Tuesday 8/9/22 Lab 
// Group Members: Lana, Monica, Andreaya, Diamond

//-------- Section A ------------
// 1. How do we assign a value to a variable?
// To assign a value to a variable, we use the = operator.
// On the left side is the variable name, and on the right side of
// the = operator is the value, which can be a string
// number, or Boolean value

// 2. How do we change the value of a variable?
// Once a variable has already been declared with the word let, 
// we can change the value of a variable by reassigning the new 
// value to the same variable by rewriting it in
// the form of let variable = new value.

//3. How do we assign an existing variable to a new variable?
// We can set the existing variable to a new variable by using the
// assignment operator (=). For example:
// let num = 2;
// let total = 5;
// let num = total;

// 4. Remind me, what are declare, assign, and define?
// Declare: means you are creating or initializing a variable and 
// giving it a name.
// Assign: means you use the assignment operator (=) to assign a value to 
// a variable and set it equal to that value.
// Define: means you can change the value that is already stored in a variable
//by setting it equal to a new value. 

// 5. What is pseudocoding and why should you do it?
// Pseudocoding is an informal way of coding or programming without using
// any type of proper syntax. You should use it because it's an efficient way
// to get an idea of how you want your program to be run, and it's much easier 
// and simpler to read.

// 6. What percentage of time should be spent thinking about how you're 
// solve another problem vs actually typing in code to solve it?
// I would say 40% trying to figure out how to solve the problem and 60% on
// actually coding.

// ----------- Section B ------------

// 1. Create a variable called firstVariable:
let firstVariable

// 2. Assign it the value of the string "Hello World"
let firstVariable = "Hello World";

// 3. Change the value of this variable to some number.
let firstVariable = 3;

// 4. Store the value of the firstVariable in a new variable called secondVariable.
let firstVariable = secondVariable;

// 5. Change the value of secondVariable to any string.
let secondVariable = "coding";

// 6. What is the value of firstVariable?
    // 3, a number that is an integer

// 7. Create a variable called yourName and set it equal to your name as a string.
// Then write an expression that takes the string "Hello, my name is " 
// and the variable yourName so that it returns a new string with them concatenated.
    let yourName = "Lana";
    console.log("Hello, my name is " + yourName);
    
//----------- Section C ------------
//.7 <
//.8 >
//.9 =
//.11 ||
//.12 && && && && ||
//.13 ===
//.14 ===
//.15 || &&
//.16 == ||
//.17 ==

//----------- Section D ------------

// 1. Declare a variable animal. Set it to be either "cow" or something else.
const animal = "cow";

// 2. Write code that will print out "mooooo" if the it is equal to cow.
if (animal === "cow") {
    console.log("mooooo");
}

// 3. Change your code so that if the variable animal is anything other than a cow, 
// it will print "Hey! You're not a cow."
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}