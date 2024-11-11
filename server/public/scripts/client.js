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
  // On ready function.
  function onReady(){
    console.log("OnReady -- GET function when the page reloads")
    axios({
        method: "GET",
        url: "/calculations",
      })
        .then((response) => {
          console.log("Data From Server", response.data);
          
        })
        .catch((error) => {
          console.log("Oops, GET to /quotes broke!", error);
        });
    }

    onReady()
  
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
//   const newClacs = 
//     {
//         numOne,
//         numTwo,
//         operator,
//     }
    // Below will allow viewage of previous calculations, but not in order to pass the test.
    // let result; 
    // If else statements that target the operator for each if else.
    // if (operator === '+'){
    //     result = numOne + numTwo
    //     console.log('Here is the result of your operator "+": ', result)
    //   } else if (operator === '-') {
    //     result = numOne - numTwo
    //     console.log('Here is your result using subtraction: ', result)
    //   } else if (operator === '*'){
    //     result = numOne * numTwo
    //     console.log('Here is your result using multiplication: ', result)
    //   } else if (operator === '/'){
    //     result = numOne / numTwo
    //     console.log('Here is your result using division: ', result)
    //   }
    //   const resultHistory = document.getElementById('historyResult')
    // use .innerHTML to add in an unordered list for the inputs and button.
    // resultHistory.innerHTML += `
    // <ul>
    //   <li> ${numOne} ${operator} ${numTwo} = ${result}
    // </ul>
    // `
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
function renderToDom(calculations) {
  console.log("renderToDom() activated, with quotes: ", quotes);
  
  const calculationsData = document.getElementById("resultRecent");
  // Clear DOM before re-render
  calculationsData.innerHTML = ""

  console.log("calculations on DOM: ", calculationsData);

  // Append all quotes to the dom
  for (let calc of calculations) {
    calculationsData.innerHTML += `
            <li>${calculationsData.numberOne} ${calculationsData.operator} ${calculationsData.numberTwo} = ${calculationsData.result}</li>
        `;
  }
}
// The above function is close to displaying the required information to the DOM
// Not quite sure where to go from here.



//Clear button function:
function clearButton() {
    console.log('bye bye numbers...')
    //Command to reset all inputs.
    document.getElementById('calculatorData').reset()
    
}