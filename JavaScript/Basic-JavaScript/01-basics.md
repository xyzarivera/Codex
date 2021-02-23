# Basics

## Comment JavaScript Code

```javascript
// This is an in-line comment.

/* This is a
multi-line comment */
```

## Data Types

-   `undefined`
-   `null`
-   `boolean`
    -   `true` or `false`
    -   mutually exclusive
    -   never written with quotes
-   `String`
    -   collection of characters
    -   `' '` or `" "`
        -   works the same
    -   `` `
    -   `\` to escape literal quotes and sequences
    -   can't do mathematical operations
    -   value of a string variable is called a `string literal`
    -   `String` values are imumutable
-   `symbol`
-   `bigint`
-   `number`
    -   mathematical operations
    -   `floating point` or `float`
        -   decimal numbers
-   `object`

## Variables

-   `var {variableName}`
-   can store different values at different times
-   `varaibleName` can consist of
    -   numbers
    -   letters
    -   `$` or `_`
    -   not contain spaces
    -   do not start with a number
    -   case sensitive

### camelCase

-   "multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized"

## Notes

-   end statements with semicolons
-   Not all real numbers can accurately be represented in floating point. This can lead to rounding errors. [Details Here.](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems)
-   [Modulo !== Remainder](https://www.geeksforgeeks.org/how-to-get-negative-result-using-modulo-operator-in-javascript/)
-   JavaScript uses `Zero-based indexing`

## Assignment Operator

-   `=`
-   "If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator."

## Uninitialized Variables

-   `undefined` initial value
-   result of mathematcal operation of an `undefined` variable
    -   `NaN` - Not a Number
-   result of string concatenation of an `undefined` variable
-   literal string of "undefined"

## Number Operators

-   `+` Addition
-   `-` Subtraction
-   `*` Multiplication
-   `/` Division
-   `i++;` Increment
    -   `i = i + 1;`
-   `i--;`Decrement
    -   `i = i -1;`
-   `%` Remainder
    -   `remainder = a - (a / b) * b`
    -   it gives negative results on negative numbers
-   Modulo
    -   `modulo = ((a % n ) + n ) % n`
-   `a += 5` Augmented Addition
    -   `a = a + 5`
-   `a-= 5` Augmented Subtraction
    -   `a = a - 5`
-   `a *= 4` Augmented Multiplication
    -   `a = a * 5`
-   `a /= 4` Augmented Division
    -   `a = a / 5`

## Literal Sequences

| Code | Output          |
| ---- | --------------- |
| \'   | single quote    |
| \"   | double quote    |
| \\   | backslash       |
| \n   | newline         |
| \r   | carriage return |
| \t   | tab             |
| \b   | word boundary   |
| \f   | form feed       |

## String Operators

-   `+` Concatenation operator
-   `+=` Augmented Concatenation
-   `{stringVar}.length` - length of a String

## Bracket Notation

-   `{stringVar}[i]`
    -   `i` string index
    -   Nth to the last character
        -   `{stringVar}[{stringVar}.length - N]

## String Immutability

-   `String` values cannot be altered once created.
-   Individual character of a `string literal` cannot be changed.
-   the only way is to assign to a new string

## String Variables

-   store several data and data types in one variable
    -   `[ a , "b", c]`
-   access array entries using `array indexes`
    -   written in tha same bracket notation
    -   zero-based indexing
-   entries of arrays are `mutable`
-   `multi-dimensional array`
    -   nest array within other arrays
    -   Array[x][y]
        -   x = outermost array index
        -   y = next level of entries inside
-   `.push()`
    -   append data to the end of an array
    -   takes one or more parameters and "pushes" them onto the end of the array
    -   `myArray.push(["dog", 3]);`
-   `pop()`
    -   removes the last element from an array and returns that element
    -   returned element can be assigned to a variable
    -   any data type can be "popped" off
    -   `var removedFromMyArray = myArray.pop();`
-   `shift()`
    -   removes the first element of an array
    -   `var removedFromMyArray = myArray.shift();`
-   `unshift()`
    -   add data in front of the array
    -   `myArray.unshift(["Paul", 35]);`

## Functions

-   call/invoke a function by its name followed by parenthesis
    -   `functionName()`

```javascript
function functionName() {
    console.log("Hello World");
}
```

-   `parameters`
    -   variables that acts as placeholders for function inpus
-   `arguments`
    -   actual parameter values
-   `scope`
    -   visibility of variables
    -   `Global Scope`
        -   variables defined outside of a function block
        -   variables initialized without using `var` are automatically created in the `global` scope regardless if it is inside a function block or not
            -   creates unintended consequences in the code
            -   always declare variables with `var`
    -   `Local Scope`
        -   visible only within that function
        -   variables declared within a function
        -   function parameters have local scope
    -   `local` variables takes precedence over `global` variables

```javascript
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5); // 8
```

-   `return`
    -   send value back out of a function
    -   if no `return` system, the returned value is `undefined`

## Queue

-   abstract Data Structure
-   new items added at back of the queue
-   old items are taken off from front of the queue

```javascript
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var a = arr.shift();
    return a;
    // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

## Conditional Logic

### Comparison Operators

-   returns a a boolean `true` or `false` value

| Symbol | Name                     | Does Type Coercion? |
| ------ | ------------------------ | ------------------- | ---------- | --- |
| ==     | Equality                 | yes                 |
| ===    | Strict Equality          | no                  |
| !=     | Inequality               | yes                 |
| !==    | Strict Inequality        | no                  |
| >      | Greater Than             | yes                 |
| >=     | Greater Than or Equal To | yes                 |
| <      | Less Than                | yes                 |
| <=     | Less Than or Equal To    | yes                 |
| &&     | Logical AND              | --                  |
|        |                          |                     | Logical OR | --  |

-   `==` Equality Operator
    -   compares two values
    -   returns true if they're equivalent or false if they are not.
    -   `Type Coercion`
        -   In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another.
        ```javascript
        1 == 1; // true
        1 == 2; // false
        1 == "1"; // true
        "3" == 3; // true
        ```
-   `===` Strict Equality Operator
    -   does not perform type conversion
    ```javascript
    3 === 3; // true
    3 === "3"; // false
    ```
-   `!=` Inequality Operator
    -   compares two values
    -   returns false if they're equivalent or true if they are not.
    -   does type conversion
        ```javascript
        1 != 2; // true
        1 != "1"; // false
        1 != "1"; // false
        1 != true; // false
        0 != false; // false
        ```
-   `!==` Strict Inequality Operator

    -   logical opposite of strict equality operator
    -   will no convert data types

        ```javascript
        3 !== 3; // false
        3 !== "3"; // true
        4 !== 3; // true
        ```

### If-Else Statements

-   `if`
    -   execute the code in the curly braces under certain `Boolean conditions`, defined in the parentheses
-   `else`
    -   executes when `if` condition is false
- `else if` 
  - multiple conditions
- function is executed from top to bottom

```JavaScript
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

```
