// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ["Apple","Banana","Strawberry"];
favorite_fruits.push("Mango","Kiwi","Pineapple")
favorite_fruits.map(item=> (console.log(`You really like ${item}!`))) 