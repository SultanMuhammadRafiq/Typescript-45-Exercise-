// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Examples of Tests for equality and inequality with strings
let vehicle = "Car";
console.log(vehicle == "Car"); 
console.log(vehicle != "Bicycle"); 
console.log(vehicle == "Bike"); 
console.log(vehicle != "Plane");
console.log(vehicle == "Car");

// Example of Tests using the lower case function
let Student = "Ahmed";
console.log(Student.toLowerCase() == "ahmed"); 
console.log(Student.toLowerCase() != "Ahmed"); 
console.log(Student.toLowerCase() === "AHMED");
console.log(Student.toLowerCase() != "Ahmed"); 


// Examples of Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 18;
console.log(age == 25); 
console.log(age >= 18); 
console.log(age <= 36); 
console.log(age >= 32); 
console.log(age <= 18); 
console.log(age != 19); 
console.log(age < 16); 
console.log(age > 30); 
console.log(age >= 37); 
console.log(age <= 30); 


// Examples of Tests using "and" and "or" operators

let marksObtain  = 80;
let grade = "A";
console.log(marksObtain >= 80 && grade == "A"); 
console.log(marksObtain >= 70 && grade == "B"); 
console.log(marksObtain >= 90 || grade == "A+"); 
console.log(marksObtain < 60 && grade == "C"); 
console.log(marksObtain < 50 || grade == "D"); 



