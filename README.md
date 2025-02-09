# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string. The error message is: `Type 'string[]' is not assignable to type 'string'.`

The `bug.ts` file contains the erroneous code.  The `bugSolution.ts` file shows how to fix the issue.

## How to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file using the TypeScript compiler (tsc) and Node.js.
3. Observe the compilation error.

## Solution

The solution involves ensuring that the type of the variable passed to the `greeter` function matches the expected type.  This can be achieved by either modifying the function signature or changing how the data is passed to the function.  See `bugSolution.ts` for the corrected code.