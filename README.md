# Uncommon error in TypeScript when passing an invalid date string to the Date object

This repository contains a TypeScript program that demonstrates an uncommon error when passing an invalid date string to the Date object. The error message is not very helpful and does not clearly indicate that the problem is with the invalid date string.

The solution is to handle the invalid date string case and provide more helpful error messages.

## How to reproduce

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the program using `ts-node bug.ts`.

## Solution

The solution is to handle the invalid date string case and provide more helpful error messages. This can be done by using a try-catch block to catch the error and provide a more helpful error message. The solution code is available in `bugSolution.ts`.