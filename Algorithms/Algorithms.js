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
    yes = num1 < 100 && num2 <100;
    return yes;
}
let less = lessThan(22,15);
less = lessThan(32,394);
console.log(less);

function leapyear(num){
    leap = num % 4 === 0;
    return leap;
}
let year = leapyear(2020);
console.log(year);

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