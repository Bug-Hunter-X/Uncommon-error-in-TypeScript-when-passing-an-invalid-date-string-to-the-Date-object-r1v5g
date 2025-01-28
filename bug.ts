function greet(person: string, date: Date): string {
  console.log(person, date);
  return `Hello, ${person}! Today is ${date.toDateString()}.`;
}

greet("World", new Date()); //Works fine
greet("typescript", new Date(2024, 1, 1)); //Works fine
greet("javascript", new Date(2024, 1, 30)); //Works fine

//Uncommon error
greet("user", new Date("Invalid Date")); //Error