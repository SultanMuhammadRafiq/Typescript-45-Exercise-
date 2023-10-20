// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestlist1 = ["Ahmed", "Aleem", "Adil"];
var guestnotAttend = "Ahmed";
var newGuest = "Tanveer";
guestlist1[guestlist1.indexOf(guestnotAttend)] = newGuest;
guestlist1.unshift("Khizar");
guestlist1.splice(1, 0, "Usman");
guestlist1.push("Qamar");
console.log("Dear ".concat(guestlist1[0], " You are invited for a Dinner."));
console.log("Dear ".concat(guestlist1[1], " You are invited for a Dinner."));
console.log("Dear ".concat(guestlist1[2], " You are invited for a Dinner."));
console.log("Dear ".concat(guestlist1[3], " You are invited for a Dinner."));
console.log("Dear ".concat(guestlist1[4], " You are invited for a Dinner."));
console.log("Dear ".concat(guestlist1[5], " You are invited for a Dinner."));
