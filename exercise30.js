// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var username = ["Admin", "Ali", "Ahmed", "Ahmed", "Arsalan", "Habib"];
var adminArr = ["Admin"];
var userLoggedin = ["Ali", "Ahmed", "Ahmed", "Arsalan", "Habib"];
console.log("Hello ".concat(adminArr, ", would you like to see a status report?"));
userLoggedin.map(function (item) { return (console.log("\"Hello ".concat(item, ", thank you for logging in again.\""))); });
