// ===== WEB CONSOLE =====

/* 

Create some variables in the console.

Discuss "undefined".

Clear console using refresh and clear() method.

*/

// ===== CODE BLOCKS =====

/* 

Block statement is used to group zero or more statements grouped by a pair of curly braces.

Can contain zero or more statements.

*/

// Blocked Scope
let a = 10;
let b = 5;

{
    let c = a + b;
    // console.log(c);
}

// This will return 15 in the web console. Notice how things inside curly braces are being ran by JS. Take note that this will change with future syntax.

// ===== SCOPE =====

// Scope in computer programming pertains to the accessibility of variables and functions from a given point of the code.

/* 

Global: default scope for all code running in script mode

Function: located inside a function

Block: located inside curly braces

[NTK] Extra:

Module: scope for code running in module mode

Difference between Global and Module: Scripts are for synchronous loading and evaluation; modules are for asynchronous loading and evaluation

*/

// Why Scope?

// The Principle of Least Access: idea that limiting the accessibility of variables (and functions) helps reduce bugs in the code.

// ===== GLOBAL SCOPE =====

/* 

Discuss window object. Top of the scope chain meaning we have access to everything in the window object.

Avoid writing variables in global scope to avoid overwriting data by other libraries/frameworks or routines.

Too many variables can pollute the global scope. 

Create var, let, or const variables in the web console. Use window. to look for our variable. 

*/

// ===== BLOCK SCOPE =====

{
    var d = 1;
    {
      var d = 2;  // same variable!
    //   console.log(d);
    }
    // console.log(d);
}

// Note: 

{
    let e = 1;
    {
        let e = 2;  // different variable
        // console.log(e);
    }
    // console.log(e);
}

// Note: 

// ===== PRACTICE =====

let f = 10;

{
    let g = 15;
    {
        const h = f + g;
        // console.log(h); // ??
    }
    // console.log(h); // ??
}

// ===== HARD PRACTICE =====

// Without running the console.log() below. Write on Slack what you think the answer will be?
// Activity: 5 minutes
var c = "I can feel the sun whenever you're near";

{
    let a = 'Honey, honey';
    {
        const b = 'I can see the stars all the way from here';
        {
            var c = "Can't you see the glow on the window pane?"
            // console.log(`${a} ${b} ${c} ${c} ${d}`);
        }
    }
    var d = "Every time you touch me I just melt away";
}

// ===== CONTROL FLOW AND CONDITIONALS =====

/* 

Conditonals perform different operations based on the given test parameters. Using conditionals allows us to control the order in which JavaScript executes statements which is called "control flow."

JS runs in sequence until it runs code that change the control flow, such as conditionals, loops, and etc.

*/

// IF/ELSE STATEMENT

// Syntax
if('statement here is true') {
    // do this
} else {
    // do this
};

// ===== EXAMPLES =====
if(true) {
    // do something
    // console.log('Did we make it here?');
} else {
    // do something
    // console.log('Nope, you are on the other side.');
};

if(10 > 3 && 6 == '6') {
    // console.log('YES');
} else {
    // console.log('NO');
}

if(!true) {
    // console.log('99 bottles of beers on the wall');
} else {
    // console.log('Take one down pass it around');
};

// OTHER WAYS OF WRITING IF/ELSE STATEMENTS

// Omitting the else entirely to test a single condition

const firstName = 'Bob';

if(firstName === 'Bob') {
    // console.log('Yes, Bob.');
}

// Omitting the curly braces: Reads the next statement only. Adding more statements will break code.
// Test the error.
const num = 10;

// if(num > 10)
//     console.log('Higher!');
// else
//     console.log('Lower');

// Another popular way for single conditional if statement
// if(true) console.log('YEAH!');

// Discuss how some language use indentation to create blocks. Best practice when it comes to curly braces.

// ===== TRUTHY and FALSY =====

// Data Type Coercion: This automatic conversion of one data type to another helps provide context to certain situations without the need for strict comparisons.

// JavaScript Type Coercion Explained
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

// JavaScript Equality Table
// https://dorey.github.io/JavaScript-Equality-Table/

// A "truthy" value is any value that is considered true when it is encountered in a Boolean context, like within an if statement. All values are truthy unless they are defined as falsy, and the only falsy values are:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// All of these below are TRUTHY
if (42) {}
if ("0") {}
if ("false") {}
if (-42) {}
if (Infinity) {}

// Uncomment below code

// if (myVariable) {
// 	// if myVariable is undefined, it is treated as falsy
// }

// // instead of this: results in TRUTHY
// if (typeof myVariable === "undefined") {}

// ===== PRACTICE =====

/* 

Declare a variable called num.
Write a conditional statement that checks if the num is positive or negative.

Now create another conditional statement as if you were tasked with setting up the security for a web site that only grants access to users over the age of 18, how would you write a conditional that gives users who are 18 or older access, and logs "Access Denied" for users who do not meet the given condition?

*/

// ===== NESTED IF...ELSE =====

// Testing Multiple Conditions by nesting if/else statements

// Syntax
if (true) {
	if (true) {
		// do this
	} else {
		// do this
	}
} else {
	//do this
}

// Discuss IF/ELSE IMAGE in LESSON.

const money = 0;

if (money >= 10) {
	//do this
    // console.log('Yeah I got $$$');
} else if (money <= 10) {
	//do this
    // console.log('Super Broke');
} else {
	//do this
    // console.log('Somewhat in the middle');
} 

// ===== PRACTICE =====

/* 

Write a nested if...else statement.
Declare a variable called numOne.
In each statement, log a sentence that makes sense with the condition.
Add an if...else statement that checks if numOne is positive & greater than 100.
Add another statement that checks if numONe is positive but less than 100.
Add a final statement to check if numOne is negative.
Close out with an else statement saying numOne is not a number.

*/

/* 

Write an if..else statement for the following requirements:

If a learner gets 90 or higher: console.log("A")
If a learner get 80 or above: console.log("B")
If a learner get 70 or above: console.log("C")
If a learner get 55 or above: console.log("D")
Any grade lower than 55: console.log("F")

*/

// ===== SWITCH STATEMENTS =====

// The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in any case that follows the matching case.

// Syntax
let value = '0';
switch (value) {
   case '0':
       // do something...
       break;
   case '2':
       // do something...
       break;
   default:
       // do something...
       break;
}

// BREAKDOWN
/* 

Switch keyword signifies the start of a switch statement that requires a value in the form of literal or variables.

The case clause specifies what value the switch argument can be. Both the switch argument and its case values must match in data type.

The break keyword tells JavaScript to get out of the switch statement and not evaluate any other case. Without the break keyword, JavaScript will continue to execute other case clauses.

The default keyword is like the else statement. Best practice is to always use the default keyword for case values that are invalid.

*/

let num1 = 5;
let num2 = 4;
let operand = "*";

// switch (operand) {
//    case "+":
//        console.log(num1 + num2);
//        break;
//    case "-":
//        console.log(num1 - num2);
//        break;
//    case "*":
//        console.log(num1 * num2);
//        break
//    case "/":
//        console.log(num1 / num2);
//        break;
//    default:
//        console.log("Invalid Operand")
//         // break keyword is not needed in the default case; it depends on the programmer.
//        break;
// };

