const refs = {
 
    nameOutput : document.querySelector('#name-output'),
    nameInput : document.querySelector('#name-input')
}


console.log(refs.nameOutput)
console.log(refs.nameInput)



refs.nameInput.addEventListener( "input" , (event) => {
if (event.currentTarget.value === ''){
    refs.nameOutput.textContent = 'Anonymous'
} else
refs.nameOutput.textContent = event.currentTarget.value;
     
} )
