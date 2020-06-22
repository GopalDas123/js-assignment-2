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

var a = Math.floor(Math.random() * 10) + 1;
while (){
    var user=prompt("Enter the secret number(1-10): "+a);
    if (user===a){
        alert("Congratulations!!!");
        break;
    }
    else{
        alert("Try Again")
    }
}


//Chapter 26-30 --- Task-1
