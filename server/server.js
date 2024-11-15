const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));


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

app.get('/calculations', (req, res) => {
  res.send(calculations)
})
 





app.post('/calculations', (req, res) => {
  const newCalculation = req.body
  const result = getResult(newCalculation)
  console.log(req.body)
  newCalculation.result = result
  //add new variable into array.
calculations.push(newCalculation)
console.log(newCalculation)
//Send status ok.
res.sendStatus(201)


})
// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('Touching down on /calculations')
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
        return calc.numberOne + calc.numberTwo
      //will do:
      case '-':
        return calc.numberOne - calc.numberTwo
      //will do if:
      
      case '*':
        return calc.numberOne * calc.numberTwo
      //Or this:
        
      case '/':
      return calc.numberOne / calc.numberTwo
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
