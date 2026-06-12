"use strict";

// Import function
import {displayName} from "./moduleTest.js";

// Add header and text
const text=`<h2>Javascript Practice Below...Please dont bully me</h2>`;
document.getElementById("js1").innerHTML=text;

// Functions
function toCelcius(farenheit){
    return (5/9)*(farenheit-32);
}

const text1=toCelcius(50)
document.getElementById("js2").innerHTML=text1;

const sum1 = function(a,b){
    return a+b;
}
document.getElementById("js3").innerHTML=sum1(3,5);

const product1 = (a,b,c) => a*b*c;
document.getElementById("js4").innerHTML=product1(3,5,8);

// Create object and for loop
const person = {
    name:"John",
    age: 30,
    city:"New York"
}

let text2="";
for(let x in person){
    text2+=person[x] + " ";
}
document.getElementById("js5").innerHTML=text2;

// Constructor
function Person(first, last, age, eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eye=eye;
}

const myFriend=new Person("nick","coccie",23,"blue");
document.getElementById("js6").innerHTML="My friend is " + myFriend.age + ".";

// For loop
const numbers = [1,2,3,4,5];
let nums = "";
for (let x in numbers){
    nums += x + " ";
}
document.getElementById("js7").innerHTML=nums;

// Console log
console.log("Suvrat eats dookie");

// Truncate
let x = 10.4;
document.getElementById("js8").innerHTML=Math.trunc(x);

// Type of
const xy="burger boy"
document.getElementById("js9").innerHTML=typeof xy;

document.getElementById("js10").innerHTML= "input and error test"

// Function with debugger
function checkNumber(){
    debugger
    if (document.getElementById("js11").value>5){
        document.getElementById("js10").innerHTML= "Number is greater than 5";
    } else{ 
        document.getElementById("js10").innerHTML= "Number is less than 5";
    }
}

// API call with async, await, and fetch and button with event listener changing button color
async function getJoke(){
    try {
        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
        let data = await response.json();
        document.getElementById("js13").innerHTML=data.setup + " "+ data.punchline;
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("js14").addEventListener("click", getJoke);
document.getElementById("js14").addEventListener("click",()=>{document.getElementById("js14").style.color="red"});

// Mouse movement event listener
document.addEventListener("mousemove",(event)=>{ document.getElementById("js15").innerHTML="X: " + event.clientX + "Y: " + event.clientY});

// Calling function with chosen object
const person1 = {
    name: "John"
}
const person2 = {
    name: "Paul" 
};
const person3 = {
    name: "Ringo" 
};

function greet(greeting){
    return greeting + " " + this.name;
}

let message = greet.call(person3, "Hello");
document.getElementById("js16").innerHTML=message;


// Promise
let promise = new Promise(function(resolve,reject){
    resolve("Hello");
});

let ptest = promise.then((value)=>{
    document.getElementById("js17").innerHTML=value;
})

// Using imported function
document.getElementById("js18").innerHTML=displayName("BurgerBoy");

// Window dimensions
let leng = window.innerHeight;
let widt = window.innerWidth;

document.getElementById("js19").innerHTML=leng+" " +widt;

// Cookies
document.cookie = "fart=poop";
console.log(document.cookie);

let cookie = document.cookie;
document.getElementById("js20").innerHTML=cookie;

// Local Storage
localStorage.setItem("burger", "boy");

document.getElementById("js21").innerHTML = localStorage.getItem("burger");


// AJAX
function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("js22").innerHTML = this.responseText;
    };
    xhttp.open("GET","../data/xmlhttptest.txt");
    xhttp.send();
}
document.getElementById("js22").addEventListener("click",loadDoc);

// JSON parsing
let tex23 = '{"name":"John", "age":30, "city":"New York"}';
const obj23 = JSON.parse(tex23);
document.getElementById("js23").innerHTML = obj23.name;

// JSON parsing array
const text24 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr24 = JSON.parse(text24);
document.getElementById("js23").innerHTML = myArr24[0];

// JSON dates
const text25 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj25 = JSON.parse(text25);
obj25.birth = new Date(obj25.birth);
document.getElementById("js25").innerHTML = obj25.name + ", " + obj25.birth;