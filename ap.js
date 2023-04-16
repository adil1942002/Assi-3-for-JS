alert("Hello My Name is Adil ");

document.write("Hello <br>  This is my Assingment page.");

document.write("<h1 style='color: green;'>Hello, world!</h1>");

alert("H");
alert("E");
alert("LLO");

console.log("1. Enter your name:");
console.log("2. Enter your age:");
console.log("3. Enter your email address:");
console.log("4. Thank you for providing your information.");

console.log("Hello. I Can Roun JS Through My Web Browser's Console")

var userName ;
var myName ="Adil raza"

var message ;
message ="Hello!"
alert(message);


var firstName = "Adil ";
var lastName = " Raza ";
var age = 21;
var address = " karachi in Surjani Town Secter 10/3";
alert("Name: " + firstName + lastName + "\nAge :" + age + "\nAddress: " + address)

var foods = "pizza\nBurger\nCoke";

alert(foods);

var varAlert = "This is var alert "
alert(varAlert)

var myemail = "Adil1942002@gmail.com"
alert("This is my Email Address: " + myemail);

var book ="A Smarter Way To Learn Javascript";

alert("I am trying to learn from the book " + book);

var display = "=======================$ %% $"
alert(display)


var age;
age = 21; 
alert(age);

var visited = 0;
var web = "You have visited this site " +  ++visited  + " Times"; 

console.log(web);

 var birthday = 2002;
document.write(birthday);

var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
document.write(sum);

var num3 = 10;
var num4 = 20;
var sume = (num3 * num4) + num3 % 10 - num4 ;
document.write(sume);


var num5 = 5;
document.write("Initial value " + num5 );


var num6 = ++num5;
document.write("<br> Value after Increment is : " + num6); 

var num7 = num6 + 7;
document.write("<br> Value after Addition : "+ num7);

var num8 = --num7;
document.write("<br> value after decrement : " + num8);

var num9 = num8 % 2 ;
document.write(" <br> The remainder is : " + num9);

var ticket = 600;

document.write("Total cost to by 5 tickets to movie is " + ticket * 5 + " PKR");

var a = +prompt("wnter Table Number")

for(var i = 1; i <= 10; i++){
    document.write(a + " x " + i + " = " + a * i  + "<br>");
}



var item1 =  600;
document.write("price of item 1 is " + item1)
var item2 = 400;
document.write("<br> price of item 2 is " + item2)
var item3 = 600;
document.write( "<br> price of item 3 is "+ item3)
var item4 =  400;
document.write("<br> price of item 4 is " + item4)


document.write("<br> Total cost of your order is " + (item1 + item2 + item3 + item4 ));



var totalMarks = 980;

var student1 = 400;
var student2 = 404;
var fullMarkd = student1 + student2;
 document.write("Total Marks : " + totalMarks + "<br> Marks Obtained : " + fullMarkd + "<br> Percentage : "+ (fullMarkd /totalMarks * 100) +" % " );


var num = 10;
document.write("The Orignal value of num is" + num + "<br>");
document.write("Result: <br>")
document.write("The value of pree incremented  ++num is " + ++num + "<br>");
document.write("The value of pree decremented  --num is " +  --num + "<br>");
document.write("...................................................................... <br>")
document.write("The value of post incremented  num++ is " + num++  + "<br>");
document.write("The value of post decremented  num-- is " +  num-- + "<br>");
document.write("......................................................................<br>")

var a = 2,b = 1;
var result = --a - --b + ++b + b--;

document.write("<br> value a is " + a);
document.write("<br> value b is " + b );
document.write("<br> result is " + result);

var userName = prompt("Enter Your Name","Adil");
document.write("Hello " + userName + " !");


var numValue = prompt("wnter Table Number")
 
if(numValue === "" || numValue == null){
 numValue = 5 ;
}

    for(var i = 1; i <= 10; i++){
        document.write(numValue + " x " + i + " = " + numValue * i  + "<br>");
    }


var cistyName = "karachi";
var enterCityName = prompt("Enter City Name");
if(cistyName === enterCityName){
    document.write("Roshniyon ka Sheher mein khushamdeed");
}
else{
    document.write("Try Again");
}

var xyz = prompt("Enter (gender) ");
if(xyz === "male"){
    document.write("Good Morning Sir ");
}
else if(xyz === "female"){
    document.write("Good Morning Ma`am ");

}
else{
    document.write("This is not right")
}


var signalColor = prompt("Enter color of road traffic signal");

 if(signalColor === "red"){
document.write("red // Stop Now <br>");
 }
 else if(signalColor === "yellow"){
    document.write("yellow // rady to go");
 }

 else if(signalColor === "green"){
    document.write("green // Go Now <br>");
}
else {
    document.write("Invalid color");
  }

var fuel = +prompt("Enter remaining fuel in car (in litres)");

if (fuel <= 2) {
    document.write("Please refill the fuel in your car");
  }
  else {
   document.write("You have enough fuel");
  }

 var a = 4;
if (++a === 5){
alert("given condition for varible a is true");
}

 var b = 5;
if (b === 5){
alert("given condition for varible a is true");
}

var c = 10;
if (b < c){
document.write("given condition for varible a is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost Equals");
}

var sub1 = +prompt("Enter your subject 1 num");
var sub2 = +prompt("Enter your subject 2 num");
var sub3 = +prompt("Enter your subject 3 num");
var sub4 = +prompt("Enter your subject 4 num");
var totalNum = sub1 + sub2 + sub3 + sub4;
var totalMarks = 400;

if(totalNum >= 0 && totalNum <= 400){
    if(totalNum >= 360){
        document.write("Totle Number  " + totalNum +   "<br>  GRADE  A+  <br>" + totalNum / totalMarks * 100 +" %" );
    }
   else if(totalNum >= 320){
        document.write("Totle Number  " + totalNum +   "<br>  GRADE  A  <br>" + totalNum / totalMarks * 100 +" %" );
    }

    else if(totalNum >= 280){
        document.write("Totle Number  " + totalNum +   "<br>  GRADE  B  <br>" + totalNum / totalMarks * 100 +" %" );
    }
    else if(totalNum >= 240){
        document.write("Totle Number  " + totalNum +   " <br> GRADE  C  <br>" + totalNum / totalMarks * 100 +" %" );
    }
    else if(totalNum >= 200){
        document.write("Totle Number  " + totalNum +   " <br> GRADE  D <br> " + totalNum / totalMarks * 100 +" %" );
    }
    else if(totalNum >= 160){
        document.write("Totle Number  " + totalNum +   " <br> Fale <br>" + totalNum / totalMarks * 100 +" %" );
    }

}
else{
    document.write("This is rong num")
}


var num10 = 8;
var guees = +prompt("Please Enter Guees A Number");

if (num10 == guees ){
    alert("Bingo Correct ! ")
}
else if (num10 == guees + 1 || num10 == guees - 1){
    alert("Close enough to the correct answer ");
}
else{
    alert("Rong Answer");
}

var num11 = prompt("Enter num")
if (num11 % 3 === 0){
    alert("This is divide 3 number");

}
else{
    alert("This is not divide 3 number")
}

var num12 = prompt("Enter num")
if (num12 % 2 === 0){
    alert("This is divide 2 number Even");

}
else{
    alert("This is not divide 2 number odd")
}


var hot = prompt("Enter Temperature");
if (hot > 40){
    alert("It is to  hot outside")
}
else if (hot > 30){
    alert("The weather today is normal")
}
else if (hot > 20){
    alert("Today's weather is cool")
}
else if (hot > 0){
    alert("O M G! today's weather is soo cool")
}


var num20 = +prompt("Enter first Number");
var num21 = +prompt("Enter scend Number");
var operation = prompt("Operation chunein (+, _, *, /, %)");
if(operation === "+"){
    document.write("Anawer: " +( num20 + num21 ))
}
else if(operation === "-"){
    document.write("Anawer: " + ( num20 - num21 ))
} 
else if(operation === "*"){
    document.write("Anawer: " + ( num20 * num21 ))
} 
else if(operation === "/"){
    document.write("Anawer: " + ( num20 / num21 ))
} 
else if(operation === "%"){
    document.write("Anawer: " + ( num20 % num21 ))
} 
else{
    document.write("invalide operation")
}





var char = prompt("Enter a character (0 to 64 is number ) (65 to 90 is upperCase) (97 to 122 is lowerCase) ");

if (char >= 0 && char <=64){
    document.write("This is Number ");
}
else if (char >=65 && char <= 90 ){
    char = char.toUpperCase;
    document.write("This is UpperCase")
}
else if(char >= 97 && char <= 122){
    char = char.toLowerCase
    document.write("This is lowerCase");
}
else{
    document.write("This value is not set");
}


var  num30 = +prompt("Enter  Number 1 ");
var  num31 = +prompt("Enter Number 2 ");

if (num30 < num31){
    document.write(num31 + " This larger value")
}
else if (num30 > num31){
    document.write(num30 + " This larger value")
}
else{
    document.write("Equale");
}
 



var num40 = prompt("Enter vowel ")

if(num40 == "a" || num40 == "e" || num40 == "i" || num40 == "o" || num40 == "u" || num40 == "A" || num40 == "E" || num40 == "I" || num40 == "O" || num40 == "U" ){
    document.write("True")
}
else{
    document.write("False")
}

var pasword = "Adilraza2002";
var userpasword = prompt("Enter password");

if(userpasword == ""){
    document.write("Please Enter a password")
}
else if (userpasword == pasword){
    document.write("Correct Password !")
}
else{
    document.write("Not Correct Password !")

}

var greetimg ;
var time = prompt("Enter Hour");
if(time < 18){
    greetimg = "Good day";
}
else {
    greetimg = "Good evening";

}
document.write(greetimg);


var time = prompt("Enter Hour");
if(time >= 0000 && time < 1200){
document.write("Good Morring ! ")
}
else if ( time >= 1200 && time < 1700){
    document.write("Good afternoon ! ")

}
else if ( time >= 1700 && time < 2100){
    document.write("Good Evening ! ")

}
else if ( time >= 2100 && time <= 2359 ){
    document.write("Good Night ! ")

}
else{
    
    document.write("invalid time entered");
}


var student10 = [];

 student10 =  [ "Adil " ," Ahmed"];
document.write(student10 + "<br>")

 var student11 = [1,2,3,4,5,6,7,8,9,];
 document.write(student11 +"<br>");

var multi = [1,"A",true];
document.write(multi);

var education =["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]

document.write("<h3>Pakistan in education department</h3> <br>")
document.write("<ol>")
for(i = 0; i < education.length; i++){
    document.write("<li>" + education[i] + "</li>")

}
document.write("</ol>")

var color = ["red","yellow"]
document.write(color + "<br>");

var enterColorf = prompt("Enter color star Name")
color.unshift (enterColorf);
document.write(color + "<br>");

var enterColorl = prompt("Enter color last Name")
color.push (enterColorl);
document.write(color + "<br>");

color.unshift("white","black")
document.write(color + "<br>");
color.shift()
document.write(color + "<br>");
color.pop()
document.write(color + "<br>");
var enterColori = prompt("Enter color index Name")

color [2] = enterColori;
document.write(color + "<br>");

var enterColors = prompt("Enter color delete start ?")
var enterColore = prompt("Enter color delete end ?")

color.splice(enterColors,enterColore);

document.write(color + "<br>");

var cityName = ["k","A","R","A","C","H","I","complete"];

selectedcity = cityName.slice(0,7)
document.write(selectedcity);

var pit =["This "," is "," My "," cat"]
var npit = pit.join ("")    ; 
document.write(npit);

var array = []; 
array.push("index1 <br>");
array.push("index2 <br>");
array.push("index3 <br>");
document.write(array.shift());
document.write(array.shift());
document.write(array.shift());

var array = []; 
array.push("index1 <br>");
array.push("index2 <br>");
array.push("index3 <br>");
document.write(array.pop());
document.write(array.pop());
document.write(array.pop());

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var select = document.getElementById("phone-select");

for (var i = 0; i < phone.length; i++) {
    var option = document.createElement("option");
    option.text = phone[i];
    select.add(option);
}

var multiArray = [];
 multiArray[0] = [1,2,3];
multiArray[1] = [4, 5, 6];
multiArray[2] = [7, 8, 9];
document.write(multiArray[0] + "<br>"+ multiArray[1] + "<br>" + multiArray[2] + "<br>" );

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }

var tableNumber = parseInt(prompt("Table number: "));
var tableLength = parseInt(prompt("Table length: "));

document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");

for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " x " + i + " = " + tableNumber*i + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h2>Fruits:</h2>");

for (var i = 0; i < fruits.length; i++) {
    
    document.write("<b>" + fruits[i] + "</b>" + "<br>")
    
}

var fruits1 = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h2>Fruits 1:</h2>");

for (var i = 0; i < fruits1.length; i++) {    
    document.write(" Element at index " +  [i] + " is " );
    document.write( fruits[i]  + "<br>")
}



document.write("Counting: ");
		for (var i = 1; i <= 15; i++) {
			document.write(i + ", ");
		}
		document.write("<br>");

		document.write("Reverse counting: ");
		for (var i = 10; i >= 1; i--) {
			document.write(i + ", ");
		}
		document.write("<br>");

		document.write("Even: ");
		for (var i = 0; i <= 21; i += 2) {
			document.write(i + ", ");
		}
		document.write("<br>");

		document.write("Odd: ");
		for (var i = 1; i <= 19; i += 2) {
			document.write(i + ", ");
		}
		document.write("<br>");

		document.write("Series: ");
		for (var i = 2; i <= 20; i += 2) {
			document.write(i + "k, ");
		}

var cookie = ["cake","chips","patties"]

var fcookie = prompt("found cookie")

if(cookie.includes(fcookie)){
    document.write("cookies yes")
}
else{
    document.write("cookies no")
    
}

var largerNum = [70,20,10,30,90,50]

var max = [0];

for(var i = 0; i < largerNum.length; i++ ){
    if(largerNum[i] > max){

        max = largerNum[i];
    }
}
document.write(max);



var largerNum1 = [2,20,10,30,90,50]

var max1 =  largerNum1 [0];

for(var i = 0; i < largerNum1.length; i++ ){
        if(largerNum1[i] < max1){
        
                max1 = largerNum1[i];
            }
        }
        document.write(max1);
        
        for(i = 1; i <= 10; i++ ){
            var a = 5 * i
            document.write(a + "<br>")


        }