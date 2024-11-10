console.log('client.js is sourced!');

function getCalculations() {
    console.log("Getting calculations...");
  
    // Use axios to GET quotes from our server.
    // What is the method type: GET
    // What is the path: '/quotes'
    axios({
      method: "GET",
      url: "/calculations",
    })
      .then((response) => {
        console.log("Data From Server", response.data);
        renderToDom(response.data); // Will only be called after we get a response.
      })
      .catch((error) => {
        console.log("Oops, GET to /calculations broke!", error);
      });
  }
  function onReady(){
    getCalculations()
    console.log('calling onReady')
  }
onReady()
// Create a function to prevent default:
function onPress(event, operator){
    event.preventDefault(event)
    console.log('Preventing the default action')
    let numOne = Number(document.getElementById('numberOne').value)
  let numTwo = Number(document.getElementById('numberTwo').value)
  console.log(`First input value: ${numOne}, operator choosen: ${operator}, second input value: ${numTwo}`)
const newClacs = 
    {
        numOne,
        numTwo,
        operator,
    }
    let result; 
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
}

//Create functions for each mathematical operation

//First, ADDITION!
// function addition(event) {
//     let numOne = Number(document.getElementById('numberOne').value)
//     let numTwo = Number(document.getElementById('numberTwo').value)
//     console.log('My two numbers: ', numOne, numTwo)
//     let numbersAdded = numOne + numTwo
//     console.log('My two numbers added together', numbersAdded)
//     const sectionView = document.getElementById('resultRecent')
//     sectionView.innerHTML += `
//         <li> ${numOne} + ${numTwo} = ${numbersAdded}</li>
    
//     `
// }

//SUBTRACTION!
// function subtraction(event) {
//     console.log('Subtraction function has been called.')
//     let numOne = Number(document.getElementById('numberOne').value)
//     let numTwo = Number(document.getElementById('numberTwo').value)
//     console.log('My two numbers: ', numOne, numTwo)
//     let numbersAdded = numOne - numTwo
//     console.log('My two numbers subtracted equals: ', numbersAdded)
//     const sectionView = document.getElementById('resultRecent')
//     sectionView.innerHTML += `
//         <li> ${numOne} - ${numTwo} = ${numbersAdded}</li>
//     `
// }

//Multiplication!!
// function multiplication(event) {
//     console.log('Subtraction function has been called.')
//     let numOne = Number(document.getElementById('numberOne').value)
//     let numTwo = Number(document.getElementById('numberTwo').value)
//     console.log('My two numbers: ', numOne, numTwo)
//     let numbersAdded = numOne * numTwo
//     console.log('My two numbers subtracted equals: ', numbersAdded)
//     const sectionView = document.getElementById('resultRecent')
//     sectionView.innerHTML += `
//         <li> ${numOne} x ${numTwo} = ${numbersAdded}</li>
//     `
// }

//Division
// function division(event) {
//     console.log('Subtraction function has been called.')
//     let numOne = Number(document.getElementById('numberOne').value)
//     let numTwo = Number(document.getElementById('numberTwo').value)
//     console.log('My two numbers: ', numOne, numTwo)
//     let numbersAdded = numOne / numTwo
//     console.log('My two numbers subtracted equals: ', numbersAdded)
//     const sectionView = document.getElementById('resultRecent')
//     sectionView.innerHTML += `
//         <li id="dataResult"> ${numOne} ÷ ${numTwo} = ${numbersAdded}</li>
//         `
// }


//Equal Button:



//Clear button function:
function clearButton() {
    console.log('bye bye numbers...')
    document.getElementById('calculatorData').reset()
    
}