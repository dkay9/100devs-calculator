let inputDisplay = document.querySelector('#inputBox')
let buttons = document.querySelectorAll('button')

let string = ""

buttons.forEach(element => {
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputDisplay.value = string
        }else{
            string += b.target.innerText
            inputDisplay.value = string
        }
    })
})