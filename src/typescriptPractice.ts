
// First test
function greet(name: string): string{
    return `Hello ${name}!`
}
const test:string = greet("Nicholas.C first typescript test");
document.getElementById("ts1")!.innerHTML = test;