const refs = {
  boxes : document.querySelector('#boxes'),
  creatreBtn : document.querySelector('button[data-create]'),
  destroyBtn : document.querySelector('button[data-destroy]'),
  controls : document.querySelector('#controls')
}



const inputBox = refs.controls.firstElementChild
let inputValue = 0; 
inputBox.addEventListener("input", () =>{
  inputValue = Number(inputBox.value)
  return inputValue   
})
console.log(inputValue)

refs.creatreBtn.addEventListener('click', createBoxes(4))
  

function createBoxes(amount){

for ( let i = 0; i < amount; i+= 1){
  const newBox = document.createElement('div')
  newBox.style.width = '30px'
  newBox.style.height = '30px'
  newBox.style.backgroundColor = getRandomHexColor()
  refs.boxes.appendChild(newBox)
}
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
