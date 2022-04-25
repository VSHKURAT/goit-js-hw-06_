
const refs = {
    categoriesList : document.querySelector('#categories'),
    itemOfCategory : document.querySelectorAll('.item'),
}


console.log( `Number of categories:${refs.itemOfCategory.length}`)

refs.itemOfCategory.forEach( element => {
 console.log(`Category: ${element.querySelector('h2').textContent}`)
 console.log(`Elements: ${element.querySelector('ul').children.length}`)
} )


