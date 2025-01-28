function greet(person: string, dateString: string): string {
  let date: Date;
  try {
    date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return `Hello, ${person}! I could not determine today's date.`;
  }
  console.log(person, date);
  return `Hello, ${person}! Today is ${date.toDateString()}.`;
}

greet("World", new Date().toString()); //Works fine
greet("typescript", new Date(2024, 1, 1).toString()); //Works fine
greet("javascript", new Date(2024, 1, 30).toString()); //Works fine

greet("user", "Invalid Date"); //Handles the error