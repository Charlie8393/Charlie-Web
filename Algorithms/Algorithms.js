// It will take two numbers as arguments and return the sum
function addition(num1,num2){
    sum = num1 + num2;
    return sum;
}
let answer = addition(3,2);
answer = addition (-3,-6);
console.log(answer);

// It will take one argument for radius and return the area of a circle
function circlearea(radius){
    area = Math.PI * Math.pow(radius,2);
    return area;
}
let circle = circlearea(10);
console.log(circle);

// It will take two numbers as  arguments and Return true if the sum of both numbers is less than 100.
// If one of them is high than 100, it will return false.
function lessThan(num1,num2){
    if(num1 + num2 <100){
        return true;
    } else{
        return false;
    }
}
let less = lessThan(22,15);
less = lessThan(101,32);
console.log(less);
// Create a function that determines if the year is a leap year or not
// # A leap year happens every four years therefore a year is divisible by four
function leapyear(num){
    leap = num % 4 === 0;
    return leap;
}
let year = leapyear(2020);
console.log(year);

// Create a function that takes two arguments as integers
// Return true if one of them is 10 or their sum is 10
function ten(one,two){
    if(one + two === 10){
        return true;
    }
    else if(one=== 10){
        return true;
    }
    else if (two === 10){
        return true;
    }
    else{
        return false;
    }
}
let each = ten(9,10);
each = ten(4,6);
console.log(each);