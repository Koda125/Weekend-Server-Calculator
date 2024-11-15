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
}

  // On ready function.
  function onReady(){
    getHistory()
  }
 
  function clearButton(event) {
    event.preventDefault()
    document.getElementById('numberOne').value = ''
    document.getElementById('numberTwo').value = ''
    operator = undefined
  }

//CCreate a function that renders the data to the dom:

