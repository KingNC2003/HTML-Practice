
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
const genTest = new namedValue<number>("rickulous");
genTest.setValue(5);
const finGTest = genTest.getValue();
document.getElementById("ts26")!.innerHTML = String(finGTest);

    // Types alias // can do <T=string or whatever> to set defualt
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };

    // Extend 
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

// Utility types
interface UtilType1 {
    x: number;
    y: number;
}
    // Partial - All properties optional
let utilType1: Partial<UtilType1> = {};
utilType1.x=3;

    // Required - All properties required
interface UtilType2 {
    make: string;
    model: string;
    mileage?: number;
}
let utilType2: Required<UtilType2> = {
    make: "Ford",
    model: "Mustang",
    mileage: 20000
}

    // Record same as key - value pair... equal to { [key: string]: number }
const nameAge: Record<string,number> = {
    "nick":20
}
console.log(nameAge);

    // Omit - Remove keys from an object type
interface OmitTest{
    name: string;
    age: number;
}
const omitTest: Omit<OmitTest, "age"> = {
    name: "frank"
}
console.log( omitTest.name);

    // Pick - Removes all but the specified property
interface PickTest {
    name: string;
    age: number;
}
const pickTest: Pick<PickTest, "name"> = {
    name: "Farqueveuos",
}
console.log(pickTest.name);

    // Exclude - Removes types from a union
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true;

    // ReturnType - Extracts the return type of a function
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

    // Parameters - Extracts parameter types of a function as array
type PointPrinter = (p: { x: number; y: number; }) => void;
const point34: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

    // Readonly - Is used to create a new type where all properties are readonly
interface Person55 {
  name: string;
  age: number;
}
const person55: Readonly<Person55> = {
  name: "Dylan",
  age: 35,
};

// Keyof - Keyof Person means “only allow property names that exist on Person,”
interface KeyOfTest{
    x: string;
    y: string;
}
function keyofTest(x: KeyOfTest, property: keyof KeyOfTest): void{
    console.log(`Printing person property ${x}: "${x[property]}"`);
}
let person123 = {
  x: "Max",
  y: "farter"
};
keyofTest(person123, "x");
    // With index signatures
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

// Null and undefined
    // Types
    let value99: string | undefined | null = null;
    value99 = "hello";
    value99 = undefined;

    // Optional chaining
    interface House {
        sqft: number;
        yard?: {sqft: number};
    }
    
    function printYardSize (house: House): void{
        const yardSize = house.yard?.sqft;
        if (yardSize===undefined){
            console.log("No yard")
        }else {
            console.log(`Yard is ${yardSize} sqft`);
        }
    }
    let home432: House = {
        sqft: 554
    }
    printYardSize(home432);

    // Nullish coalescing
    function printMileage(mileage: number | null | undefined){
        console.log(`Mileage: ${mileage ?? "Not available"}`)
    }
    printMileage(null);
    printMileage(0);

    // Null assertion
    function getValue1(): string | undefined {
        return 'hello';
    }
    let value11 = getValue1();
    console.log('value length: ' + value11!.length);

    // Array bounds handling
        // Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).
        // The config noUncheckedIndexedAccess can be used to change this behavior.
        let array112: number[] = [1, 2, 3];
        let value321 = array112[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`

// Definitely typed
    // Using untyped NPM packages with TypeScript is not type-safe because types are missing.
    // To help TypeScript developers use such packages, there is a community-maintained project called Definitely Typed.
    // Definitely Typed is a project that provides a central repository of TypeScript definitions for NPM packages which do not have types.

    // npm install --save-dev @types/jquery

// TypeScript Configuration
    // The tsconfig.json file is the heart of every TypeScript project.
    // It tells the TypeScript compiler how to process your code, which files to include, and which features to enable or disable.
    // A well-configured tsconfig.json ensures a smooth developer experience and reliable builds.

    // Key Concepts & Explanations
        // compilerOptions: Controls how TypeScript compiles your code (e.g., target, module, strictness).
        // include: Files or folders to include in the compilation.
        // exclude: Files or folders to exclude.
        // files: Explicit list of files to include (rarely used with include).
        // extends: Inherit options from another config file.
        // references: Enable project references for monorepos or multi-package setups.

    // Examples    
        // Minimal tsconfig.jsonGet your own TypeScript Server
            // {
            // "compilerOptions": {
                // "target": "es6",
                // "module": "commonjs"
            // },
            // "include": ["src/**/*"]
            // }

        // Generate tsconfig.json file
            // tsc --init

    // Monorepo: Use references and extends to share settings across packages.
    // Library: Set declaration and outDir for type definitions.
    // App: Use strict and esModuleInterop for best compatibility.

    // Common Pitfalls & Troubleshooting
        // Misconfigured include/exclude can cause files to be missed or included unexpectedly.
        // Paths not resolving? Check baseUrl and paths settings.
        // Type errors after changing strict? Review your code for type safety.
        
    


    // Type guards
        // Typeof
            function formatValue(value: string | number): string{
                if (typeof value==="string"){
                    return value.trim().toUpperCase();
                }else {
                    return value.toFixed(2);
                }
            }
            const result324 = formatValue('  hello  ');
            const result254 = formatValue(42.1234);
            
        
