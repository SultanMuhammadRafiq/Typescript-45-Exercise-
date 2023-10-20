
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color: string = "Red";

if (alien_color == "Green") {
    console.log('Congratulations! You just earned 5 points!');
} else if (alien_color == "Yellow") {
    console.log('Congratulations! You just earned 10 points!');
} else if (alien_color == "Red") {
    console.log('Congratulations! You just earned 15 points!');
}


let trafficSignal: string = "Red";

if (trafficSignal == "Green") {
    console.log("Congratulations! You can go Now!");
} else if (trafficSignal == "Yellow") {
    console.log("Please wait Road will clear Soon");
} else if (trafficSignal == "Red") {
    console.log("Please stop your Vehicle");
}
