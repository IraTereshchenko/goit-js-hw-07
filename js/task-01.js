const categoriesRef = document.querySelectorAll('.item')
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(elements => {
const title = elements.querySelector('h2')
console.log(title.textContent);
const quantity = elements.querySelectorAll('li')
console.log(quantity.length);
})

