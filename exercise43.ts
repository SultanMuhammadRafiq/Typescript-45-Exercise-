// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let make_great=["Alexander","Alicia","Candy"];
let show_magicians=["Alexander The Great","Alicia The Great","Candy The Great"];

make_great.map((item)=> 
(
    console.log(item)
)
     )

     show_magicians.map((item)=> 
(
    console.log(item)
)
     )