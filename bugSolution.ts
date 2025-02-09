function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user));

//Alternative solution if you need to handle an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' ');
}

let users = ["Jane", "Doe"];
console.log(greeterArray(users));