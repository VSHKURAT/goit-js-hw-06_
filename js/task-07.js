const refs = {
    input : document.querySelector('#font-size-control'),
    spanText : document.querySelector('#text')
}

refs.input.addEventListener("input", () => {
    const inputValue = Number(refs.input.value)
    
   refs.spanText.style.fontSize = `${inputValue}px`;
    
})


