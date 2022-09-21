//Complete the instructions for each numbered problem 

//1. data types built-in methods, variables 

//a. define a variable and give it a string value
    // variables are containers for storing data
    var a = 'Hello World';
  


//b. define a variable and give it a number value
    var b = 10;
   

//c. define a variable and give it a boolean value
    var c = true; 


//2. if else, ternary 
//a. define a variable 'metrocard' and give it a value of 5
    var metrocard = 5; 

//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
    if (metrocard > 2.75) {
        console.log("you have enough to ride the train");
     }
//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
    else {
        console.log( "you do not have enough to pay fare sorry");
    }
//d. write the above if/else statement again as a ternary 
    var metrocard = 5; 
    if (metrocard > 2.75) {
        message = "you have enough to ride the train";
    }
    else {
        message = "you do not have enough to pay fare sorry";
    }
    console.log(`${message}`);
    
//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1 
//add a screenshot showing your completion of this project to the root folder of this repo
var userName='';
let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';


(userName === 'Jane') ? console.log(`Hello, ${userName}!`): console.log('Hello!');

var userQuestion = 'what is your favorite movie?';

userName="Jane's"
console.log(`${userName} question is : "${userQuestion}"`);


switch(randomNumber){
  case 0:
  eightball = "It is certain";
  break;
  case 1:
  eightball = "It is decidedly so";
  break;
  case 2:
  eightball = "Reply hazy try again";
  break;
  case 3:
  eightball = "Cannot predict now";
  break;
  case 4:
  eightball = "Do not count on it";
  break;
  case 5:
  eightball = "My sources say no";
  break;
  case 6: 
  eightball = "Outlook not so good";
  break;
  case 7: 
  eightball = "Signs point to yes";
  break;

}

console.log(eightball); 

//4. functions 
//a. write a function named helloWorld that returns the value 'Hello World!' 

function helloWorld() {
    return "Hello World!"
  }

//b. console log the value returned from running the function helloWorld
console.log(helloWorld())

//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
let fruits = ["Apple", "Mango", "Orange", "Pinapple", "Kiwi"];

//b. an array's index starts at:
//0


//4. loops 
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0 
let num = 12; 
for (let i = 5; i >= 0; i--) {
    console.log(num -= 2);
  }

//5. objects
//a. define a variable named 'bike' 
var bike; 

//b. assign an object to bike 
bike = new Object()

//c. give the object 3 properties: handlebars, color, wheels 
//d. give each property a value 

bike.handlebars = 'handlebars'; 
bike.color = 'blue'; 
bike.wheels = 'wheels'; 



//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/


let size =  8; //setting limit for the for loop
let chessboard = "";  //setting a placeholder to append the outcome of the if/else statment

//i reprensents the rows 
for (let i=0; i < size; i++ ){

    //j represents the columns
    for (let j=0; j < size; j++){
        console.log(i, j)
        if ((i + j) % 2 == 0){ 
            chessboard += " ";

        } else {
            chessboard += "#"; 
        }
    }
    chessboard += "\n"; 
}

console.log(chessboard)
