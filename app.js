// Chapter 21-25 --- Task-1

// let fN=prompt("First Name: ");
// let lN=prompt("Last Name: ");
// let fullName=fN+" "+lN;
// alert("Hello " +fullName+ " Welcome Here");

// Chapter 21-25 --- Task-2

// let favPhone=prompt("Enter your favourite phone: ");
// let len=favPhone.length
// document.write("My Favourite phone is: "+favPhone);
// document.write("<br>Length of String: "+len);

// Chapter 21-25 --- Task-3

// let a="Pakistani";
// let n=a.indexOf('n');
// document.write("String: "+a);
// document.write("<br>Index of 'n': "+n);

// Chapter 21-25 --- Task-4

// let a="Hello World";
// let b=a.lastIndexOf("l");
// document.write("Last index of l: "+b);

// Chapter 21-25 --- Task-5

// let a="Pakistani";
// let n=a.charAt(3);
// document.write("String: "+a);
// document.write("<br>Character At Index 3: "+n);

// Chapter 21-25 --- Task-6

// let fN=prompt("First Name: ");
// let lN=prompt("Last Name: ");
// let fullName=fN.concat(lN)
// alert("Hello " +fullName+ " Welcome Here");

// Chapter 21-25 --- Task-7

// let a="Hyderabad";
// let b=a.replace("Hyder","Islam");
// document.write("Before: "+a)
// document.write("<br>After: "+b)

// Chapter 21-25 --- Task-8

// let message ="Ali and Sami are best friends. They play cricket and football together.";
// let repl = message.replace(/and/g, "&")
// document.write(repl);

// Chapter 21-25 --- Task-9

// var a="472";
// document.write("Value: "+a);
// document.write("<br>Type: "+typeof(a));
// var a=Number(a);
// document.write("<br>Value: "+a);
// document.write("<br>Type: "+typeof(a));

// Chapter 21-25 --- Task-10

// var a=prompt("Enter anything: ");
// var b=a.toLocaleUpperCase();
// document.write(b);

// Chapter 21-25 --- Task-11

// var a=prompt("Enter anything: ");
// var b=a.toLocaleLowerCase();
// var c=b.charAt(0).toLocaleUpperCase()+ a.substr(1).toLowerCase();
// document.write("User input: " +a);
// document.write("<br>Title Case: " +c);

// Chapter 21-25 --- Task-12

// var a = 23.98;
// var b = a.toString();
// var c = b.replace(".", "");
// document.write("Number: " + a);
// document.write("<br>Result: " + c);

// Chapter 21-25 --- Task-13

// var user=prompt("Enter username: ");
// alert("The Price is "+code);

// Chapter 21-25 --- Task-14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user=prompt("Welcome to our bakery \nWhat do you want to order?");
// function x(){
//     return user === a;
// }
// document.write(x())
// continue

// Chapter 21-25 --- Task-15

//later

//Chapter 21-25 --- Task-16

// var uni = "University of Karachi";
// var a = uni.split("");
// document.write(a);

//Chapter 21-25 --- Task-17
// var a="pakistan";
// var x=a.substr(-1);
// document.write("User input: "+a);
// document.write("<br>Last Char: "+x);

//Chapter 21-25 --- Task-17

// var x="The quick brown fox jumps over the lazy dog";
// var a=x.match(/"and"/g).length;
// document.write(x);
//continue

//Chapter 26-30 --- Task-1

// var a=prompt("Enter any +ve no: ");
// var b=Math.round(a);
// var c=Math.floor(a);
// var d=Math.ceil(a);
// document.write("Number: "+a);
// document.write("<br>Rounded off: "+b);
// document.write("<br>Floor: "+c);
// document.write("<br>Ceil: "+d);

//Chapter 26-30 --- Task-2

// var a=prompt("Enter any -ve no: ");
// var b=Math.round(a);
// var c=Math.floor(a);
// var d=Math.ceil(a);
// document.write("Number: "+a);
// document.write("<br>Rounded off: "+b);
// document.write("<br>Floor: "+c);
// document.write("<br>Ceil: "+d);

//Chapter 26-30 --- Task-3

// var a=prompt("Enter any number: ")
// var b=Math.abs(a);
// alert("Absolute value is: "+b);

//Chapter 26-30 --- Task-4

// var a = Math.floor(Math.random() * 6) + 1;
// document.write("random value: " + a);

//Chapter 26-30 --- Task-5

// var a = Math.floor(Math.random() * 2) + 1;
// if (a===1) {
//     document.write("Its Heads");
// } else {
//     document.write("Its Tails");
// }

//Chapter 26-30 --- Task-6
// var a = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number Between (1-100): " + a);

//Chapter 26-30 --- Task-7

// var weight=prompt("Enter your weight in KGs: ");
// document.write("Your weight is: "+weight)

//Chapter 26-30 --- Task-8

// var a = Math.floor(Math.random() * 10) + 1;
// while (1){
//     var user=prompt("Enter the secret number(1-10): ");
//     if (user==a){
//         alert("Congratulations!!!");
//         break;
//     }
//     else{
//         alert("Try Again")
//     }
// }

//Chapter 31-34 --- Task-1

// var a = Date();
// document.write(a);

//Chapter 31-34 --- Task-2

// var month = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var a = new Date();
// var x = a.getMonth();
// document.write("Current Month: "+month[x]);

//Chapter 31-34 --- Task-3

// var a = Date();
// var b = a.toString();
// var c = b.slice(0,3);
// document.write(c);

//Chapter 31-34 --- Task-4

// var a = new Date();
// var datee = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Satruday",
//   "Sunday",
// ];
// var x = a.getDay();

// if (x===5||x===6) {
//     document.write("Its Funday")
// }
// else{
//     document.write(datee[x-1]);
// }

//Chapter 31-34 --- Task-5

// var a=new Date();
// var x=a.getDate();
// if (x<16) {
//     document.write("First Fifteen Days of Month");

// } else {
//     document.write("Last Fifteen Days of Month");
// }

// Chapter 31-34 --- Task-6

// var a = new Date();
// var mili = a.getTime();
// var minutes = mili/60/60/60;
// document.write(
//   "Current Date: " +
//     a +
//     "<br> Elapsed Mili Seconds since Jan 1, 1970: " +
//     mili +
//     "<br> Elapsed Minutes since Jan 1, 1970: " +
//     minutes
// );

// Chapter 31-34 --- Task-7

// var dt = new Date();
// var h = dt.getHours();
// m = dt.getMinutes();
// var tiime = h > 12 ? "Its PM" : "Its AM";

// document.write(tiime);

// Chapter 31-34 --- Task-8

// var date = new Date("31 Dec 2020 21:00:00");
// document.write(date);

// Chapter 31-34 --- Task-9

// var date = new Date("18 June 2015 00:00:00");
// var x=date.getHours();
// var x=x/24;
// document.write(x + " Days Have Passed since 1st ramzan of 2015");

// Chapter 31-34 --- Task-10

// Chapter 31-34 --- Task-10
// Chapter 31-34 --- Task-11
// Chapter 31-34 --- Task-12

// var bday=prompt("Enter Your birth year: ");
// var age=2020-bday;
// document.write("Your Age is: "+age);
// document.write("<br>Your Birth Year is: "+bday);

// Chapter 31-34 --- Task-14

// document.write("<b>K-Electric Bill</b><br>");
// var cName="Gopal Das";
// var month="June";
// var nUnits=410;
// var perUnit=16;
// var lPayment=350
// var nMount=nUnits*perUnit;
// var gMount=nMount+lPayment;
// document.write("<br>Customer Name: "+cName);
// document.write("<br>Month: "+month);
// document.write("<br>Number of units: "+nUnits);
// document.write("<br>Charges Per Unit: "+perUnit+"<br>");
// document.write("<br>Net Amount Payable (within due date): "+nMount);
// document.write("<br>Late Payment charges: "+lPayment);
// document.write("<br>Gross Amount Payable (after due date): "+gMount);

// Chapter 35-38 --- Task-1

// function now() {
//   var a = new Date();
//   document.write(a);
// }
// now();

// Chapter 35-38 --- Task-2

// function greet(fName, lName) {
//   document.write("Hello " + fName +" " + lName + "<br>Welcome to our site");
// }
// greet("Gopal", "Das");

// Chapter 35-38 --- Task-3

// function addd(val1,val2){
//     var c=val1+val2;
//     document.write("Sum is: "+c);
// }
// var val1=Number(prompt("Enter 1st Value: "));
// var val2=Number(prompt("Enter 2nd Value: "));
// addd(val1,val2);

// Chapter 35-38 --- Task-4

// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     document.write("Sum is: " + num1 + num2);
//   } else if (operator === "-") {
//     document.write("Substraction is: " + num1 - num2);
//   } else if (operator === "/") {
//     document.write("Division is: " + num1 / num2);
//   } else if (operator === "*") {
//     document.write("Product is: " + num1 * num2);
//   } else {
//     document.write("Invalid Value");
//   }
// }
// var num1=Number(prompt("Enter 1st Value: "));
// var operator=prompt("Enter operator(+,-,*,/): ")
// var num2=Number(prompt("Enter 2nd Value: "));
// calculator(num1,num2,operator);



// Chapter 35-38 --- Task-5

// function sqr(num){
//     document.write("Square of your value is: "+num*num)
// }
// var num=Number(prompt("Enter any value: "));
// sqr(num);



// Chapter 35-38 --- Task-6

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(6) );



// Chapter 35-38 --- Task-7

// var sNum=Number(prompt("Enter starting point: "))
// var eNum=Number(prompt("Enter ending point: "))
// for (let i = sNum; i <= eNum; i++) {
//   document.write(i+"<br>");
// }



// Chapter 35-38 --- Task-8

// function calHyp(base,perp){

// }
function hyp(base,perp) {
    function calSqr(value) {
        return value*value;
    }
    

}

var base=Number(prompt("Enter Base: "));
var perp=Number(prompt("Enter Perpendicular: "));



