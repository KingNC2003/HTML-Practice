
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
            
        // Instanceof
            class bird{
                fly():void{
                    console.log("Flying...");
                }
            }

            class fish{
                swim(): void{
                    console.log("Swimming...");
                }
            }

            function move(animal: bird | fish): void{
                if (animal instanceof bird){
                    animal.fly();
                }else {
                    animal.swim();
                }
            }

            // User defined type guards

            interface Car321 {
                make: string;
                model: string;
                year: number;
            }

            interface Motorcycle {
                make: string;
                model: string;
                year: number;
                type: "Sport" | "Cruiser"
            }

            function isCar(vehicle: Car321 | Motorcycle): vehicle is Car321{
                return (vehicle as Motorcycle).type === undefined;
            }

            function displayVehicleInfo(vehicle: Car321 | Motorcycle) {
                console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
                if (isCar(vehicle)) {
                    console.log("This is a car");
                } else {
                    console.log(`This is a ${(vehicle as Motorcycle).type} motorcycle`);
                }
            }

            const car321 = {
                make: "Toyota",
                model: "Camry",
                year: 2022
            };

            const motorcycle = {
                make: "Harley-Davidson",
                model: "Street Glide",
                year: 2021,
                type: "Cruiser"
            };

            displayVehicleInfo(car321);
            displayVehicleInfo(motorcycle);

            // Discriminated unions

            interface Circle1 {
                kind: "circle";
                radius: number;
            }

            interface Square1 {
                kind: "square";
                sideLength: number;
            }

            function calculateArea(shape: Circle1 | Square1){
                switch(shape.kind){
                case "circle":
                    return Math.PI * shape.radius ** 2;
                case "square": 
                    return shape.sideLength ** 2;
                }
            }
            const circle: Circle1 = {
                kind: "circle",
                radius: 5
            };

            const square: Square1 = {
                kind: "square",
                sideLength: 4
            };

                console.log(`Circle area: ${calculateArea(circle).toFixed(2)}`);
                console.log(`Square area: ${calculateArea(square)}`);


            // In operator
            interface Dog {
                bark(): void;
            }
            interface Cat {
                meow(): void;
            }

            function makeSound(animal: Dog | Cat) {
                if ("bark" in animal) {
                    // TypeScript knows animal is Dog here
                    animal.bark();
                } else {
                    // TypeScript knows animal is Cat here
                    animal.meow();
                }
            }


        // Assertion functions
            // Type assertion function
                function assertIsString(value: unknown): asserts value is string {
                if (typeof value !== 'string') {
                    throw new Error('Value is not a string');
                }
                }

                // Type assertion function with custom error
                function assert(condition: unknown, message: string): asserts condition {
                if (!condition) {
                    throw new Error(message);
                }
                }

                // Usage
                function processInput(input: unknown) {
                assertIsString(input);
                // input is now typed as string
                console.log(input.toUpperCase());
                }

                // With custom error
                function processNumber(value: unknown): number {
                assert(typeof value === 'number', 'Value must be a number');
                // value is now typed as number
                return value * 2;
                }

           // When to Use Each Type Guard
                // Use typeof for primitive types (string, number, boolean, etc.)
                // Use instanceof for class instances and built-in objects
                // Use user-defined type guards for complex validation logic
                // Use discriminated unions for related types with a common discriminant
                // Use the in operator for checking property existence
                // Use type assertion functions for runtime validation with errors
                // Performance Considerations
                // typeof and instanceof are very fast
                // Avoid complex logic in user-defined type guards when performance is critical
                // Consider using type predicates for expensive checks that are used multiple times

        // Conditional types
            // Basic conditional type
                // Conditional types use the form T extends U ? X : Y, which means:
                // "if type T extends (or is assignable to) type U, use type X, otherwise use type Y".
                const checkIfString = (value: unknown)=>{
                    return typeof value==="string" ? true : false;
                }
                console.log("Is 'hello' a string?", checkIfString("hello"));
                console.log("Is 42 a string?", checkIfString(42));

            // Conditional types with unions
            // Infer
                //The infer keyword allows you to declare a type variable within the condition part of a conditional type and then use it in the true branch of the condition
            // Conditional libary stuff
                // Extract<T, U> - Extracts types from T that are assignable to U
                    // type OnlyStrings = Extract<string | number | boolean, string>; // string

                // Exclude<T, U> - Excludes types from T that are assignable to U
                    //  type NoStrings = Exclude<string | number | boolean, string>; // number | boolean

                // NonNullable<T> - Removes null and undefined from T
                    // type NotNull = NonNullable<string | null | undefined>; // string

                // Parameters<T> - Extracts parameter types from a function type
                    // type Params = Parameters<(a: string, b: number) => void>; // [string, number]

                // ReturnType<T> - Extracts the return type from a function type
                    // type Return = ReturnType<() => string>; // string

        // Mapped types
            interface Person856 {
                name: string;
                age: number;
                email: string;
            }

            // Create a mapped type that makes all properties optional
            type PartialPerson856 = {
                [P in keyof Person856]?: Person856[P];
            };

            // Usage
            const partialPerson: PartialPerson856 = {
                name: "John"
                // age and email are optional
            };

            // Create a mapped type that makes all properties readonly
            type ReadonlyPerson = {
                readonly [P in keyof Person]: Person[P];
            };

            // Built-in Mapped Types
                    //Standard Library Utilities
                        // TypeScript includes several useful built-in mapped types:
                            // Partial<T>: make all props optional
                            // Readonly<T>: make all props readonly
                            // Pick<T, K>: select a subset of keys
                            // Omit<T, K>: remove keys
                            // Record<K, V>: map keys to a value type

        // Literal types
            // Do's and Don'ts
            // Do:
                // Use literal types for fixed sets of values (enums, configuration options)
                // Combine with union types for better type safety
                // Use template literal types for string pattern matching
                // Leverage type inference when possible
                // Document the meaning of literal types
            // Don't:
                // Overuse literal types when a more general type would be better
                // Create extremely large union types that hurt performance
                // Use string literals when an enum would be more appropriate
                // Performance Considerations
                // Type Checking Performance
                // Large union types can slow down type checking
                // Complex template literal types can increase compilation time
                // Consider using type aliases for complex literal types
                // Be mindful of TypeScript's recursion depth limits
        
        // Namespaces
            // For using stuff in other files (import/export)

        // Index signatures
            // Basic can use readonly
                interface StringDictionary {
                    [key: string]: string;
                }

                const name: StringDictionary = {
                    firstname: "Alice",
                    lastname: "Allison",
                    "100": "One hundred"
                }
                console.log(name["firstName"]);

            // Do's and Don'ts
                // Do:
                   // !!!!! INDEX SIGNITURES WITH APIS !!!!!
                   // Use index signatures for collections with dynamic keys
                   // Combine with explicit properties for known fields
                   // Keep value types specific (avoid any)
                   // Use readonly when mutation isn't needed
                // Don't:
                   // Prefer fixed interfaces when keys are known
                   // Forget that all properties must conform to the index signature type
                   // Reinvent mapped types-use the dedicated page for transformations
        
        // Declaration merging
            // Can merge interfaces
            // Can merge class with interface
            // Can merge enums

            // Best Practices
                // There are some rules to consider when using declaration merging:
                    // Order matters for function overloads: The implementation signature should be the most general
                    // Non-function members must be compatible: If two interfaces declare a property with the same name, the types must be identical or compatible
                    // Later interfaces take precedence: If conflicts exist in merged interfaces, the last declaration wins
                    // Private and protected members: Classes can't merge if they have private or protected members with the same name but different types
                    // Namespace exports: Only exported declarations are visible outside the namespace after merging
                // Performance Considerations
                    // Compilation Time: Excessive declaration merging can increase compilation time
                    // Type Checking: Complex merged types may impact IDE performance
                    // Bundle Size: Declaration merging doesn't affect runtime performance or bundle size
                // Optimization Tips:
                    // Keep merged interfaces focused and cohesive
                    // Avoid deep nesting in merged types
                    // Use type aliases for simple type combinations instead of merging

        // Async programming
            // Remeber for promises - Promise(accept function, reject function)
                interface Product {
                    id: number;
                    name: string;
                    price: number;
                }

                async function fetchProduct(id: number): Promise<Product> {
                    console.log(`Fetching product ${id}...`);
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
                    return { id, name: `Product ${id}`, price: Math.floor(Math.random() * 100) };
                }

                async function fetchMultipleProducts() {
                    try {
                        // Start all fetches in parallel
                        const [product1, product2, product3] = await Promise.all([
                            fetchProduct(1),
                            fetchProduct(2),
                            fetchProduct(3),
                        ]);

                        const total = [product1, product2, product3]
                        .reduce((sum, product) => sum + product.price, 0);

                        console.log(`Total price: $${total.toFixed(2)}`);
                    } catch (error) {
                        console.error("Error fetching products:", error);
                    }
                }

                    fetchMultipleProducts();

               // Promise Combination Methods
                    // Promise.all() - Waits for all promises to resolve
                    // Promise.race() - Returns the first settled promise
                    // Promise.allSettled() - Waits for all to settle (success or failure)
                    // Promise.any() - Returns the first fulfilled promise

                // Error Handling Strategies
                    // Try/Catch Blocks: For handling errors in async/await
                    // Error Boundaries: For React components
                    // Result Types: Functional approach with success/failure
                    // Error Subclassing: For domain-specific errors
        
        // Decorators
            // Decorators are @ functions used to add metadata or behavior to classes, methods, or properties.
            // Decorators usually run when the class is created/defined, not every time you use the class.

            //They provide extra behavior or metadata, like saying “this class is a controller,” “this method handles GET requests,” 
            //“log this method,” or “this property is required.”

        // Best practices
            // - Project Configuration — Turn on strict TypeScript settings so TypeScript catches more mistakes before your code runs. This usually starts with "strict": true in tsconfig.json.
            // - Type System Best Practices — Let TypeScript infer obvious types, but write clear types for function parameters and important public code. Avoid any because it removes TypeScript’s safety.
            // - Code Organization — Split code into clear files, like model/type files, service files, component files, and test files. Use consistent file naming so the project is easier to navigate.
            // - Best Practices — Document important types, prefer composition over inheritance, and make your types more specific as your project grows. The idea is to keep the code easier to understand and safer over time.
            // - Functions and Methods — Give function parameters and return values proper types, especially when the function is important. Keep functions focused instead of making one function do too many different jobs.
            // - Async/Await Patterns — Use try/catch for async errors, check failed HTTP responses, and use Promise.all when independent async tasks can run together. Keep async code flat instead of deeply nested.
            // - Testing and Quality — Write code in a way that is easy to test, like passing dependencies in instead of creating them directly inside a class. You can also test TypeScript types using tools like @ts-expect-error or type-testing utilities.
            // - Performance Considerations — Use import type when importing only types, and avoid overly complex types that slow down TypeScript. Use as const when you want TypeScript to remember exact literal values.
            // - Common Mistakes to Avoid — Do not overuse any, do not turn off strict mode, and do not ignore null/undefined problems. Use type guards, optional chaining, and nullish coalescing to make code safer