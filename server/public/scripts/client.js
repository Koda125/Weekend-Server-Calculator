onReady()
const { response } = require("../../server");

console.log('client.js is sourced!');

let operator; //useable in any function.
//When op is clicked, will assign var to the correct one clicked.
function setOp(event, op) {
    event.preventDefault()
console.log('what operator was selected? ', op)
    operator = op
    console.log('Function has changed global operator to: ', operator)

}
//Will preform GET request to retrieve history from server
function getHistory() {
    //AXIOS GET request
    axios({
        method: "GET",
        url: "/calculations"

    })
    .then((response) => {
        console.log('Success on GET request.')
        if(response.data.length > 0)
        renderToDom()
    })
    .catch((error) => {
        console.log('Oops, something happened: ', error)
    })
    
    //semt to '/calculations'
    // Render history to DOM and render RecentResult
}

function handleSubmit(event) {
    event.preventDefault()
    const firstNumInput = Number(document.getElementById('numberOne')).value
    const secondNumInput = Number(document.getElementById('numberTwo')).value
    // send newCalc to server
    let newCalc = {
        firstNum: firstNumInput,
        secondNumber: secondNumInput,
        operator: operator
    }
axios({
    method: 'POST',
    url: "/calculations",
    data: newCalc

})
.then((response) => {
    console.log("successful POST to /calculations")
    getHistory()
    clearButton(event)
        
})
.catch((error) => {
    console.log('There has been an error POSTing to /calculations: ', error)
})


  // On ready function.
  function onReady(){
    getHistory()
  }
 

function handleSubmit(event) {
    let numOne = Number(document.getElementById('numberOne').value)
  let numTwo = Number(document.getElementById('numberTwo').value)
  const newClacs = 
    {
        numOne,
        numTwo,
        operator,
    }
    console.log(`First input value: ${numOne}, operator choosen: ${operator}, second input value: ${numTwo}`)
    axios({
        method: 'POST',
        url: '/calculations',
        data: newClacs
    })
    .then((response) => {
        console.log('sucess with POST to /calculations')
    })
    .catch((error) => {
        console.log("Oops, GET to //calculations broke!", error);
      });

      // Will retrive most recent history:
      getHistory()
}
  
// Create a function to prevent default:
function onPress(event, operator){
    // Prevent default action of button.
    event.preventDefault(event)
    console.log('Preventing the default action')
    // Define two variables to grab the input values.
    let numOne = Number(document.getElementById('numberOne').value)
  let numTwo = Number(document.getElementById('numberTwo').value)
  console.log(`First input value: ${numOne}, operator choosen: ${operator}, second input value: ${numTwo}`)
// New object to store data for innerHTML display.
  const newClacs = 
    {
        numOne,
        numTwo,
        operator,
    }
    // Below will allow viewage of previous calculations, but not in order to pass the test.
    let result; 
    // If else statements that target the operator for each if else.
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
      const resultHistory = document.getElementById('historyResult')
    // use .innerHTML to add in an unordered list for the inputs and button.
    resultHistory.innerHTML += `
    <ul>
      <li> ${numOne} ${operator} ${numTwo} = ${result}
    </ul>
    `
axios({
    method: 'POST',
    url: '/calculations',
    data: newClacs // ? Must always be an object. If you want to send something other than an object, it must be packaged inside of an object then.
  }).then((response) => {
    console.log("Post to /calculations worked!!")
    // * will retrieve latests quotes and then render them on DOM
    
    
    // TODO: Clear form
  }).catch((error) => {
    console.log("Oops, POST to /calculations broke: ", error)
  })
  getCalculations(newClacs)
}

//Create function that pulls the data from the newClacs object and render in.
function renderToDom(history) {
  console.log("renderToDom() activated, with quotes: ", quotes);
  
  const recentResult = document.getElementById("resultRecent");
  const historyList = document.getElementById("historyResult");
    console.log('Recent result number is...', history[history.length - 1].result)
    //replace recentResult on dom:
    recentResult.innerHTML = history[history.length -1].result
    historyList.innerHTML += ""
    for (let item of history) {
        console.log('Current history item: ', item)
        historyList.innerHTML += `
        
        `
    }




//Clear button function:
function clearButton() {
    console.log('bye bye numbers...')
    //Command to reset all inputs.
    document.getElementById('calculatorData').reset()
    
}