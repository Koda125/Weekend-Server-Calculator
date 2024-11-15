const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

// Global variable that will contain all of the
// calculation objects:
let calculations = [
  {
    numberOne: 10,
    operator: '+', //Hardcoded example (will remove in end)
    numberTwo: 20,
    result: 30
  }
]

app.post('/calculations', (req, res) => {
  res.sendStatus(200)

  const newCalculation = req.body //giving variable for easy call back.
  const result = getResult(newCalculation)
  newCalculation.result = result





app.post('/calculations', (req, res) => {
  const {numOne, numTwo, operator} = req.body
  let result;
  //Create if's for each operation button.
  if (operator === '+'){
    result = numOne + numTwo
    console.log('Here is the result of your operator "+": ', result)
  } else if (operator === '-') {
    result = numOne - numTwo
    console.log('Here is your result using subtraction: ', result)
  } else if (operator === '*'){
    result = numOne * numTwo
    console.log('Here is your result using multiplication: ', result)
  } else if (operator === '/'){
    result = numOne / numTwo
    console.log('Here is your result using division: ', result)
  }
  console.log('What is the magic number: ', result)
  // const resultHistory = document.getElementById('historyResult')
  // resultHistory.innerHTML += `
  // <ul>
  //   <li> ${numOne} ${operator} ${numTwo} = ${result}
  // </ul>
  // `
  // create a new variable that holds the values the given operation.
  let newCalculations = [
    {
      numOne,
      operator,
      numTwo,
      result
    }
  ]
  //add new variable into array.
calculations.push(newCalculations)
console.log(newCalculations)
//Send status ok.
res.sendStatus(201)


})
// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('Touching down on /guesses')
  res.send(calculations);
});
// POST /calculations

  //req.body will equal incoming calculations.
  //call function to get result - getResult(incoming calculations)
    // will return a result number
  // add result number to incCalc as a 'result' key.
  //Push inCalc to calculations[]

function getResult(calc) {
  //switch statement to compare the operator.
    // ex if '+', 
    // return calc.firstNum + calc.secondNum
    // 
    switch (calc.operator){
      case '+':
        return calc.firstNum + calc.secondNum
      //will do:
      case '-':
        return calc.firstNum - calc.secondNum
      //will do if:
      
      case '*':
        return calc.firstNum * calc.secondNum
      //Or this:
        
      case '/':
      return calc.firstNum / calc.secondNum
      //If none of the above:
      default:
        return NaN
    }
}

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5002;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
