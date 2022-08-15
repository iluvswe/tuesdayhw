// 8/9/22 Tuesday Lab JS Total Recall
// Group members: Lana, Monica, Andreaya, Diamond
// Objects

// Section A
const user = {
  name: "Mary",
  email: "Mary@gmail.com",
  age: 25,
  purchased: [],
}

// Section B
user.email = "Mary@yahoo.com"

user.age++;

// Section C
user.location = "Virginia";

// Section D
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased.indexOf("Merino jodhpurs"));
console.log(user.purchased[2]);

// Section E
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "Virginia",
  purchased: []
}

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased.indexOf("A latte"));
console.log(user.friend.purchased[1]);

// Section F
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]); }

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]); }

// Section G
const updateUser = () => {
  user.age++;
  user.name.toUpperCase();
  console.log(user.name); }

const oldAndLoud = (person) => {
  person.age++;
  person.name.toUpperCase();
  console.log(person.name);}

oldAndLoud(user);