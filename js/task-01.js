const categoriesRef = document.querySelectorAll(".item")
// console.log(categoriesRef.length );
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(elements => {
    const title = elements.querySelector('h2')
    // console.log(title.textContent);
    console.log(`Категория: ${title.textContent}`);
    const quantity = elements.querySelectorAll("li")
    // console.log(quantity.length);
    console.log(`Количество элементов:${quantity.length}`);
})




