let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
];
// Remove the last string of the array
let shift = secretMessage.pop();
console.log(secretMessage);
// Log the length of the array
console.log(secretMessage.length);
// Add the following words to the end of the array in order
let add = secretMessage.push("to", "Program");
console.log(secretMessage);
// Change the word “easily” -> “right 
let right = secretMessage[7]="right";
console.log(secretMessage);
// Remove the first string
let remove = secretMessage.shift();
console.log(secretMessage);
// Add the following string to the beginning of the array in order
let add2 = secretMessage.unshift("Programming", "or", "Coding");
console.log(secretMessage);
// Slice the array which contains the last three elements of the original array
let part = secretMessage.slice(24,27);
console.log(part);
// Access the last element of new sliced array and log the length of the string element
let part2 = part[part.length-1];
console.log(part2.length);
// Update the last element to “UPDATED” if the length of the string is greater than 2 else remove it
if(part2.length > 2){
    part[part.length-1] = "UPDATED";
    console.log(part);
} else{
    part.pop();
}