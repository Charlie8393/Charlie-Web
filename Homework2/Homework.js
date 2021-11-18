// Preconditions
let raceNumber = Math.floor((Math.random()*1000));
// indicates whether a runner registered early or not.
let register = true;
// runner’s age and set it equal to a number.
let age = 20;

// checks whether the runner is an adult and registered early.
if (age > 18 && register === true){
    raceNumber += 1000;
}

/*
For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am.
For runners over 18 who registered late, log a statement to the console telling them that they will race at 11:00 am.
For runners under 18, log a statement to the console telling them that they will race at 12:30 pm.
For runner exactly 18, log a statement to the console telling them 'see the registration desk'
*/
if (age > 18 && register === true){
    console.log(raceNumber + ' 9:30 am - adult and registered early');
} else if (age > 18 && register === false){
    console.log(raceNumber + ' 11:00 am - adult and registered late');
} else if (age< 18){
    console.log(raceNumber + ' 12:30 pm - all youth')
} else {
    console.log('see the registration desk');
}