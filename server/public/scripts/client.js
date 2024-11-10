console.log('client.js is sourced!');


//Create a function to prevent default:
function onPress(event){
    event.preventDefault(event)
    console.log('Preventing the default action')
}

//Create functions for each mathematical operation

//First, ADDITION!
function addition(event) {
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
    console.log('My two numbers: ', numOne, numTwo)
    let numbersAdded = numOne + numTwo
    console.log('My two numbers added together', numbersAdded)
    const sectionView = document.getElementById('resultRecent')
    sectionView.innerHTML += `
        <li> ${numOne} + ${numTwo} = ${numbersAdded}</li>
    
    `
}

//SUBTRACTION!
function subtraction(event) {
    console.log('Subtraction function has been called.')
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
    console.log('My two numbers: ', numOne, numTwo)
    let numbersAdded = numOne - numTwo
    console.log('My two numbers subtracted equals: ', numbersAdded)
    const sectionView = document.getElementById('resultRecent')
    sectionView.innerHTML += `
        <li> ${numOne} - ${numTwo} = ${numbersAdded}</li>
    `
}

//Multiplication!!
function multiplication(event) {
    console.log('Subtraction function has been called.')
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
    console.log('My two numbers: ', numOne, numTwo)
    let numbersAdded = numOne * numTwo
    console.log('My two numbers subtracted equals: ', numbersAdded)
    const sectionView = document.getElementById('resultRecent')
    sectionView.innerHTML += `
        <li> ${numOne} x ${numTwo} = ${numbersAdded}</li>
    `
}

//Division
function division(event) {
    console.log('Subtraction function has been called.')
    let numOne = Number(document.getElementById('numberOne').value)
    let numTwo = Number(document.getElementById('numberTwo').value)
    console.log('My two numbers: ', numOne, numTwo)
    let numbersAdded = numOne / numTwo
    console.log('My two numbers subtracted equals: ', numbersAdded)
    const sectionView = document.getElementById('resultRecent')
    sectionView.innerHTML += `
        <li> ${numOne} ÷ ${numTwo} = ${numbersAdded}</li>
        `
}


//Equal Button:




//Clear button function:
function clearButton(event) {
    console.log('bye bye numbers...')
    document.getElementById('calculatorData').reset()
    
}