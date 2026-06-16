
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

    // Extending an interface
interface charcuterieBoardVeg {
    cheese: string,
}
interface charcuterieBoardNonVeg extends charcuterieBoardVeg{
    meat: string
}

const board: charcuterieBoardNonVeg = {
    cheese: "Mounster",
    meat: "sausage"
}

document.getElementById("ts16")!.innerHTML = board.cheese + " " + board.meat;

// More union stuff
function printStatusCode(code: string | number){
    document.getElementById("ts17")!.innerHTML = `My status code is ${code}`;
}
printStatusCode(404);

// Functions
function getTime():number{
    return new Date().getTime();
}
document.getElementById("ts18")!.innerHTML = String(getTime());

function printHello(name: string):void{
    console.log(`Hello ${name}`);
}
printHello("Nicholas");

    // Rest parameter
function addNumbers(...numbers : number[]): number{
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
}
document.getElementById("ts19")!.innerHTML = String(addNumbers(2,3,4,5,5,67));

    // Function alias
type Negate = (value: number)=>number;
const negateFunction: Negate = (value) =>value*-1;
document.getElementById("ts20")!.innerHTML = String(negateFunction(10));

// Casting
const xy: unknown = 40;
document.getElementById("ts21")!.innerHTML = xy as string;
    // Can also do <string>x or forcecasting: ((x as unknown) as number)

// Classes // can use readonly if needed
class Person { 
    public name: string;

    public constructor(name: string){
        this.name =name;
    }

    public getName(): string{
        return this.name;
    }
}

const person1 = new Person("Anne");
person1.name = "Nicholas";
console.log(person1.name);
const person2 = new Person("Anna");
console.log(person2.getName());

    // class can implement a interface and/or extend another class

class foodNV {
    public name: string;
    public meat: boolean;

    public constructor(name: string, meat: boolean){
        this.name = name;
        this.meat = meat;
    }

    public foodName(): string{
        return this.name+this.meat;
    }
}

class foodV extends foodNV{
    public constructor(name: string){
        super(name,false) 
    }
    
    public override foodName(): string {
        return this.name;
    }
}

    // Override example
const food1 = new foodNV("burger", true);
document.getElementById("ts23")!.innerHTML = food1.foodName();

const food2 = new foodV("salad");
document.getElementById("ts24")!.innerHTML = food2.foodName();

// Abstract classes 
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangles extends Polygon {
  public constructor(protected readonly width1: number, protected readonly height1: number) {
    super();
  }

  public getArea(): number {
    return this.width1 * this.height1;
  }
}

const zy = new Rectangles(6,7).getArea();
document.getElementById("ts25")!.innerHTML = String(zy);

// Generics
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

class namedValue<T>{
    private value:T | undefined;

    constructor(private name: string){
    }

    public setValue(value: T): void{
        this.value = value;
    }

     public getValue(): T | undefined{
        return this.value;
     }
}
const genTest = new namedValue("rickulous");
genTest.setValue(5);
const finGTest = genTest.getValue();
document.getElementById("ts26")!.innerHTML = finGTest as string;

    // Types alias // can do <T=string or whatever> to set defualt
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };

    // Extend 
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

// Utility types
