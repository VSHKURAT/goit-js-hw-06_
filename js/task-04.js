
const refs = {
    decrement : document.querySelector('button[data-action="decrement"]'),
    increment : document.querySelector('button[data-action="increment"]'),
    counter : document.querySelector('#value')
}


refs.increment.addEventListener("click", () => {
    refs.counter.textContent = Number(refs.counter.textContent) + 1
})
refs.decrement.addEventListener("click", () => {
    refs.counter.textContent = Number(refs.counter.textContent) - 1
})
