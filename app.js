//Chapter 21-25
//task1
/*
var firstName = prompt("\nTask 1:\n\nEnter your first name:");
var lastName = prompt("\nTask 1:\n\nEnter your last name:");
var fullName = firstName.concat(" " + lastName)

document.write("<br><br><br><br>Task 1<br><br>")
document.write("Hellow! Welcome " + fullName);
*/

//task2
/*
var mobileModel = prompt("\nTask 2:\n\nEnter your favorite mobile phone model:");
var modelLength = mobileModel.length;
document.write("<br><br><br><br>Task 2<br><br>")
document.write("Your favorite mobile phone model is: " + mobileModel);
document.write("<br>Length of string: " + modelLength);
*/

//task3&5
/*
var string = "Pakistan";
var index = string.indexOf('k');
var char = string.charAt(5);

document.write("<br><br><br><br>Task 3 & 5<br><br>")
document.write("String: " + string);
document.write("<br>Index of 'k': " + index);
document.write("<br>Character at index 5: " + char);
*/

//task4
/*
var string = "Hello World";
var index = string.lastIndexOf('l');

document.write("<br><br><br><br>Task 4<br><br>")
document.write("String: " + string);
document.write("<br>Last index of 'l': " + index);
*/

//task7
/*
var city = "Hyderabad";

document.write("<br><br><br><br>Task 7<br><br>")
document.write("Cirt: " + city);
var city = city.replace("Hyder", "Islam")
document.write("<br>City after replace: " + city);
*/

//task8
/*
var message = "Ali and Sami are best friends. They play cricket and football together.";

document.write("<br><br><br><br>Task 8<br><br>")
document.write("Before replace: " + message);
var message = message.replace(/and/g, "&")
document.write("<br>After replace: " + message);
*/

//task13
/*
var userName = prompt("\nTask 13:\n\nEnter your full name:");
var specialSymbol = ["!", ",", ".", "@"];
var message = null;

for (i = 0; i < userName.length; i++) {
    for (j = 0; j < specialSymbol.length; j++) {
        if (userName[i] === specialSymbol[j]) {
            message = "Please enter a valid user name";
        }
    }
}

if (!message){
    document.write("<br><br><br><br>Task 13<br><br>")
    document.write("Hellow! Welcome " + userName);
}
else {
    alert("\nTask 13:\n\n" + message);
}
*/

//task14
/*
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("\nTask 14:\n\nPlease enter any bakery items for search.").toLowerCase();

for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        document.write("<br><br><br><br>Task 14:<br><br> "+userInput + " is available at index " + i + " in our bakery");
        break;
    }
    else if (i+1 === bakeryItems.length && bakeryItems[i] != userInput) {
        document.write("<br><br><br><br>Task 14:<br><br>"+userInput + " is not available in our bakery");
    }
}
*/

//task18
/*
var string = "The quick brown fox jumps over the lazy dog";
var word = null;
var counter = 0;

for (i = 0; i < string.length; i++) {
    word = string.slice(i, i + 4);
    if (word === "the " || word === "The ") {
            counter++;
    }
}

document.write("<br><br><br><br>Task 18:<br><br>");
document.write("Text: " + string);
document.write("<br>There are " + counter + " occurances of the word 'the'");
*/


//************************************************************************************************************** */

//Chapter 26-30
//task4
/*
var dice = Math.ceil(Math.random() * 6);

document.write("<br><br><br><br>Task 4<br><br>");
document.write("Random dice value: " + dice);
*/

//task5
/*
var coin = Math.ceil(Math.random() * 2);

if (coin === 1) {
    document.write("<br><br>Task 5<br><br>");
    document.write("Random coin value: Heads");
}
else {
    document.write("<br><br>Task 5<br><br>");
    document.write("Random coin value: Tails");
}
*/

//task6
/*
var number = Math.ceil(Math.random() * 100);

document.write("<br><br><br><br>Task 6<br><br>");
document.write("Random number between 1 and 100: " + number);
*/

//task8
/*
var number = Math.ceil(Math.random() * 10);
var userInput = +prompt("\nTask 8:\n\nEnter number between 1 to 10:");

if ( number === userInput) {
    alert("\nTask 8:\n\nCongratulation");
}
else {
    alert("\nTask 8:\n\nTry again");

}
*/


//************************************************************************************************************** */
//Chapter 31-34

//var date = new Date();

//task1
/*
document.write("<br><br><br><br>Task 1<br><br>");
document.write(date);
*/

//task2
/*
var fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.write("<br><br><br><br>Task 2<br><br>");
document.write("Current month: " + fullMonth[date.getMonth()]);
*/


//task3
/*
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.write("<br><br><br><br>Task 3<br><br>");
document.write("Today is " + days[date.getDay()]);
*/

//task4
/*
document.write("<br><br><br><br>Task 4<br><br>");

if (date.getDay() === 0 || date.getDay() === 6) {
    document.write("It’s Fun day");
}
*/

//task5
/*
document.write("<br><br><br><br>Task 5<br><br>");

if (date.getDate() <= 15) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}
*/

//task9
/*
var ramadan2015 = new Date("June 18, 2015");
var timeDiffer = date.getTime() - ramadan2015.getTime();
var daysPast = Math.floor(timeDiffer / (1000 * 60 * 60 * 24));

document.write("<br><br><br><br>Task 9<br><br>");
document.write(daysPast + " days past since 1st Ramadan 2015");
*/

//task13
/*
var userAge = + prompt("\nTask 13:\n\nEnter your age:");
var birthYear = date.getFullYear() - userAge;

document.write("<br><br><br><br>Task 13<br><br>");
document.write("Your birth age is: " + userAge);
document.write("<br>Your birth year is: " + birthYear);
*/


//************************************************************************************************************** */
//Chapter 35-38
//task4
/*
var num1 = + prompt("\nTask 4: Calculator\n\nEnter number 1:");
var opr = prompt("\nTask 4: Calculator\n\nEnter an operator:");
var num2 = + prompt("\nTask 4: Calculator\n\nEnter number 2:");

function calculator(num1, opr, num2) {
    if (opr === "+") {
        return (num1 + num2);
    }
    else if (opr === "-") {
        return (num1 - num2);
    }
    else if (opr === "*") {
        return (num1 * num2);
    }
    else if (opr === "/") {
        return (num1 / num2);
    }
}

var res = calculator(num1, opr, num2);

document.write("<br><br><br><br>Task 4<br><br>");
document.write("Calculator<br>");
document.write( num1 + " " + opr + " " + num2 + " = " + res);
*/

//task5
/*
var userInput = + prompt("\nTask 4:\n\nEnter a number:");

function square(userInput) {
    return userInput * userInput;
}

var res = square(userInput);

document.write("<br><br><br><br>Task 5<br><br>");
document.write("The square of " + userInput + " is " + res);
*/

//task6
/*
var userInput = + prompt("\nTask 6:\n\nEnter a number:");

function factorial(userInput) {
    var a = 1;
    for (i = userInput; i > 0; i--) {
        a = a * i;
    }
    return( a );
}

var res = factorial(userInput);

document.write("<br><br><br><br>Task 6<br><br>");
document.write("The factorial of " + userInput + " is " + res);
*/