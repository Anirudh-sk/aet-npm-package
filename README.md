
<p align="center">
  <img src="https://github.com/Anirudh-sk/aet-npm-package/blob/master/assets/aet.png" alt="AET (Algo Execution Timer)"/>

  
</p>

<p align="center">🧑‍💻🕸️ Simple, fun npm package for Node.js & The Browser 🕸️🧑‍💻</p>

<p align="center">


<p align="center">
<a href="https://www.npmjs.com/package/aet-time"><img src="https://img.shields.io/npm/v/aet-time" alt="NPM Version"></a>
<a href="https://github.com/Anirudh-sk/aet-npm-package"><img src="https://img.shields.io/node/v/aet-time" alt="Node Version"></a>
<a href="https://github.com/Anirudh-sk/aet-npm-package/blob/master/LICENCE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Jest is released under the MIT license." />
  </a>
</p>

## Getting Started

Install using npm [`npm`](https://www.npmjs.com/package/aet-time):

```bash
npm install aet-time
```

## When should you use aet-time?

* You have multiple algorithms in your code
* You need to find the faster algorithm
* Don't have the time to check the complexity
* Find the faster code by using this package

## Usage

Let's get started by writing a test for a hypothetical function that runs a loop. First, create a `script.js` file:

```javascript
function fun1() {
    for (let index = 0; index < 100; index++){}
}
```

Now let's add another function to compare with the previous one in the same `script.js` file:

```javascript
function fun2() {
    for (let index = 0; index < 100000; index++){}
}
```

Now lets import the package into the file to find which function is faster:

```javascript
const aet = require('aet')

console.log(aet(fun1, fun2));
```

Your final code should look something like this:

```javascript
const aet = require('aet')

function fun1() {
    for (let index = 0; index < 100000; index++){}
}
function fun2() {
    for (let index = 0; index < 1000000000; index++){}
}

console.log(aet(fun1, fun2));
```

Replace the dummy functions `fun1` and `fun2` with the algorithms you made and want to compare.

#### If the `Algo` given in the `first` parameter is faster it returns

```bash
-1

```
#### If the `Algo` given in the `second` parameter is faster it returns

```bash
1

```
#### If both take the same time to execute it returns

```bash
0

```

## Contributing

Feel free to contribute to this project by opening [issues](https://github.com/Anirudh-sk/aet-npm-package/issues) and [pull requests](https://github.com/Anirudh-sk/aet-npm-package/pulls)

# Licence

This is an [MIT licenced](./LICENCE) Project
