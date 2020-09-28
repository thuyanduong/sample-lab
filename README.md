# Sample Lab

## Set Up

One partner should [fork this repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo). Then after it's been forked, [add the other partner(s) as collaborators](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository). Afterwards, all group members should be able to clone down the *forked repository* and all group members should be able to `push` and `pull` from that repository.

## Instructions
Work with your partner to implement the below functions using pair programming! For each exercise, one partner should be the Navigator and the other should be the Driver.

1. Navigator should describe what the function should do.
  * Describe, in plain English, what the function should take in as a parameter and what it should console.log or return.
2. Driver writes out the test cases.
  * For each problem, invoke the function with a parameter and describe the expected results.
  * We've suggested some test cases for the some of the problems, but you should come up with some of your own, too!
3. Navigator explains how to implement the function while Driver writes the code so those test cases pass!
4. Driver does some refactoring if needed, or adds additional test cases if needed.

Switch roles for each of the problems below.

#### How do I know if the code is working?
1. You should manually test your code by running the program. From the project's root directory, type `node app.js` in the terminal and see if the program does out what you expect it to.
2. You should also run the automated test cases built into this lab.
  * From the project's root directory, type and run `npm install` in your terminal. You only need to do that once.
  * Then, every time you want to run the automated test cases, run `npm test` in the terminal.


### Problems

1. Write a function called `makeNegative` that takes in one parameter, a numbers, console.log the negative version of that number.

```js
makeNegative(2);
// -2
makeNegative(3);
// -3
```

2. Write a function called `printAddition` that takes in two parameters, both are numbers, and logs a sentence describing the sum of those numbers.

```js
printAddition(1, 1); // The sum of 1 and 1 is 2.
printAddition(2, 3); // The sum of 2 and 3 is 5.
printAddition(4, 5); // The sum of 4 and 5 is 9.
```
