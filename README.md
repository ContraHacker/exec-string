# exec-string
Utility to execute a string as a function.

![npm bundle size](https://img.shields.io/bundlephobia/min/exec-string)
![version](https://img.shields.io/badge/Version-1.0.1-brightgreen)

## Installation

```bash
npm install exec-string
```

## Usage

```js
const execString = require('exec-string');

// Example use-cases

const result = execString('420 + 1337') // Returns 1757

const num1 = 42;
const num2 = 43;
const comparator = '<';

const comparison = execString(`${num1} ${comparator} ${num2}`); // Returns true
```

Can also be used with React or other libraries.

For instance, you can use it to pass a mathematical expression as props to a component. exec-string can return the value of the expression and display it in the UI.

---

> ##### Disclamer
> Make sure you undestand why JavaScript's eval function is no longer used. Please refer to [this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!) for more information.
