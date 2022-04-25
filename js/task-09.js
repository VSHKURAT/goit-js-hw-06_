
const refs = {
changeColorBtn : document.querySelector('.change-color'),
background : document.querySelector('body'),
spanValue : document.querySelector('.color')
}

refs.changeColorBtn.addEventListener('click', () => {

  refs.background.style.backgroundColor = getRandomHexColor();
  refs.spanValue.textContent = getRandomHexColor();
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
