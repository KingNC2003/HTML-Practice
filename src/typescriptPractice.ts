
// First test
function greet(name: string): string{
    return `Hello ${name}!`
}
const test:string = greet("<br>Nicholas.C first typescript test");
document.getElementById("ts1")!.innerHTML = test;

// Types
let num12: number = 13;
document.getElementById("ts2")!.innerHTML = String(num12);

// Nullish coalescing and optional chaining ?, .?, ??
type Car = {
    model: string;
    year?: number;
};

const car: Car = {
    model: "Mustang",
    
}

document.getElementById("ts3")!.innerHTML = String(car.year);
document.getElementById("ts3")!.innerHTML = String(car.year ?? "Car year not available");

// Arrays
let names: string[] = ["nick", "rick"];
let names2: readonly number[] = [1,2,3];

names.push("mick");
document.getElementById("ts5")!.innerHTML = names[0] ?? "No name found";

// Tuples
let names3:readonly [string, number, Object];
names3=["Nick",23,car]; 

// Destructuring with named tuple
let coordinates: [x: number, y:number, z:number] = [32,64,76];
let x: number = coordinates[0];
document.getElementById("ts6")!.innerHTML = String(x);

// Object types
const tools: {tool1: string, tool2?: string} = {
    tool1: "hammer",
};
document.getElementById("ts7")!.innerHTML = tools.tool2 ?? "No tools found";

const tools1 = {
    tool1: "tape",
};
document.getElementById("ts8")!.innerHTML = tools1.tool1 ?? "No tools found";

// Object - index signature
type Scores = {
    [studentname: string]: number
};

const scores: Scores = {
    Nick:3,
    Autumn: 10
};

// Enums - string or numeric
enum errorCodes{ 
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

let code = errorCodes.Accepted;
document.getElementById("ts9")!.innerHTML = String(code);

// Union/intersection types and alias
type Animal = {
    name: string
};
type Bear = Animal & {honey: boolean}
const bear: Bear = {
    name: "Brown",
    honey: true
};
    //Union
type Status = "success" | "error";
let response: Status = "success";

// Interfaces
interface Rectangle {
    hieght: number,
    width: number
}

const rectangle: Rectangle = {
    hieght: 5,
    width: 6
};
document.getElementById("ts10")!.innerHTML = String(rectangle.hieght);