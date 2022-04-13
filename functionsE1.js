// test
// console.log ("hi");

// function declaration - gets hoisted
// function greetClass () {
//     console.log("Hello class!");
// }

// greetClass ()

// String Concantenation
// function hi(first, last){
//     console.log("Hi" + first + " " + last +".")
// }

// function hi(first, last = "Briggs"){
//     console.log(`Hi ${first} ${last}.`)
// }

// hi("David")

// let first = prompt("What is your first name?");
// let last = prompt("What is your last name?");

// function greet(f, l) {
//     alert("Hello " + f + " " + l + ".")
// }

// greet(first, last);

// get area of circle

// function getAreaOfCircle(radius){
//     return 3.14 * radius * radius
// }

// console.log(getAreaOfCircle(5))

// get cricumferemce of circle

// function getCircumerenceOfCircle(radius){
//     return 2 * 3.14 * radius
// }

// console.log(getCircumerenceOfCircle(15))

// get area of a square

// function getAreaOfSquare(side){
//     return side * side ;
// }

// console.log(getAreaOfSquare(6));

// get area of a traingle

// function getAreaOfTriangle(base, height){
//     return base * height / 2
// }

// console.log(getAreaOfTriangle(10,5))

// let vs. function - Is = neccessary when writing function?

// exercise 2 

let position = 0;
let direction = "r"; 

function printlocation(){
    console.log(position);
}

function moveForward(distance){
    if (direction === "r"){
        position = position + distance;
    } else {
        position = position - distance;
    }
}

function moveBackward(distance){
    if (direction === "r"){
        position = position - distance;
    } else {
        position = position + distance;
    }
}

function turnAround(direction){
    if (direction === "r"){
        direction = "l";
    } else {
        direction = "r";
    }

}

moveBackward(4);
printlocation();

turnAround();
moveForward(7);
printlocation();






