//variable that grabs the input
const inputDisplay = document.querySelector("#inputBox")

function appendToInput(input){
    inputDisplay.value += input
}
function calculate(){
    inputDisplay.value = eval(inputDisplay.value)
}