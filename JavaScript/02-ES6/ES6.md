# ES6

## var vs let vs const keywords

- `var`
  - can overwrite variable declarations without an error
  - can be declared globally, or locally inside a function
- `let`
  - throws an error if a variable is to be overwritten
  - a variable with the same name can only be declared once
  - can be declared globally, or locally inside a function
  - if declared in a block. statement, or expression, its scope is limited to that block, statement, or expression
- `const`
  - read-only variable
  - once a variable is assigned, it cannot be reassigned.
    - an error will be thrown
  - common practice for variables is to use all uppercase letters, with words separated by an underscore

### Variable naming
- uppercase variable indentifiers for immutable values
- lowercase or camelCase for mutable values (objects and arrays)