// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestlist1=["Ahmed","Aleem","Adil"];
let guestnotAttend="Ahmed";
let newGuest="Tanveer";
guestlist1[guestlist1.indexOf(guestnotAttend)]= newGuest
guestlist1.unshift("Khizar")
guestlist1.splice(1,0,"Usman")
guestlist1.push("Qamar")
// console.log(`Dear ${guestlist1[0]} You are invited for a Dinner.`)
// console.log(`Dear ${guestlist1[1]} You are invited for a Dinner.`)
// console.log(`Dear ${guestlist1[2]} You are invited for a Dinner.`)
// console.log(`Dear ${guestlist1[3]} You are invited for a Dinner.`)
// console.log(`Dear ${guestlist1[4]} You are invited for a Dinner.`)
// console.log(`Dear ${guestlist1[5]} You are invited for a Dinner.`)

console.log("I can invite only two people for dinner.")
console.log(guestlist1)

console.log(`${guestlist1.pop()} "I am sorry i  cannot invite you to dinner"`)
console.log(`${guestlist1.pop()} "I am sorry i  cannot invite you to dinner"`)
console.log(`${guestlist1.pop()} "I am sorry i  cannot invite you to dinner"`)
console.log(`${guestlist1.pop()} "I am sorry i  cannot invite you to dinner"`)
console.log(`${guestlist1} You are still invited`)
guestlist1.pop()
guestlist1.pop()
console.log(guestlist1)
console.log("The dinner program end ")