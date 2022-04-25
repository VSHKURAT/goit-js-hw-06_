const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
const newLiItem = []

ingredients.forEach ( element => {
  const list = document.createElement('li')
  list.textContent = element
  list.classList.add('item')
  newLiItem.push(list)
})

listOfIngredients.append(...newLiItem)

console.log(listOfIngredients)
