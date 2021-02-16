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
