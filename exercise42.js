// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician1 = ["Alexander", "Alicia", "Candy"];
var make_great = magician1;
make_great.map(function (item) {
    return (console.log("".concat(item, " The Great")));
});
