const form = document.querySelector('.login-form');

form.addEventListener("submit" , onFormSubmit )

function onFormSubmit (event)  {
    event.preventDefault()
const elementOfForm = event.currentTarget.elements
if(elementOfForm.password.value === '' || elementOfForm.email.value === ""){
    alert ("Enter your email and password")
}

// const formDate = new FormData(event.currentTarget) 
// formDate.forEach( (value, name) => {
//     console.log({
//     NameOfField: name,
//     Userfield: value});
    
// })

console.log({
        Email: elementOfForm.email.value,
        Password: elementOfForm.password.value});


form.reset();
}



