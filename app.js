console.log("Write your code below!")

function makeNegative(i){
  let negative = i * -1;
  console.log(negative)
  return negative
}

function printAddition(a, b){
  let sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}.`);
  
}

//Write your test cases below this comment
makeNegative(1) // -1
makeNegative(5) // -5

printAddition(2, 3)  //the sum of 2 and 3 is 5
printAddition(9, 8)  //the sum of 9 and 8 is 17


//do not editing anything below this comment.
module.exports = {
  makeNegative,
  printAddition
};
