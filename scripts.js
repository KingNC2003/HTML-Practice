"use strict";

const text=`<h2>Javascript Practice Below...Please dont bully me</h2>`;
document.getElementById("js1").innerHTML=text;

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

function Person(first, last, age, eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eye=eye;
}

const myFriend=new Person("nick","coccie",23,"blue");
document.getElementById("js6").innerHTML="My friend is " + myFriend.age + ".";

const numbers = [1,2,3,4,5];
let nums = "";
for (let x in numbers){
    nums += x + " ";
}
document.getElementById("js7").innerHTML=nums;

console.log("Suvrat eats dookie");

let x = 10.4;
document.getElementById("js8").innerHTML=Math.trunc(x);

const xy="burger boy"
document.getElementById("js9").innerHTML=typeof xy;