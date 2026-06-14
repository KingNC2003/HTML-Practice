
// First test
function greet(name: string): string{
    return `Hello ${name}!`
}
const test:string = greet("Nicholas.C first typescript test");
document.getElementById("ts1")!.innerHTML = test;

// Types
let num12: number = 13;
document.getElementById("ts2")!.innerHTML = String(num12);

// Special types ?, .?, ??
type Car = {
    model: string;
    year?: number;
};

const car: Car = {
    model: "Mustang",
    
}

document.getElementById("ts3")!.innerHTML = String(car.year);