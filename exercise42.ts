// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician1=["Alexander","Alicia","Candy"];

let make_great=magician1 

make_great.map((item)=>
(console.log(`${item} The Great`))
)