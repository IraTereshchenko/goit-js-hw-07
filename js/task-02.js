const ingredients = [
   'Картошка',
   'Грибы',
   'Чеснок',
   'Помидоры',
   'Зелень',
   'Приправы',
 ];

const ingredientsRef = document.querySelector("#ingredients")

const itemElementsRef = ingredients.map(ingredient => {
  const itemsRef = document.createElement("li")
  itemsRef.textContent = ingredient
  return itemsRef
})

ingredientsRef.append(...itemElementsRef)



