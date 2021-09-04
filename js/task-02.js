const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')
const items = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, "")

ingredientsRef.insertAdjacentHTML("beforeend", items)




