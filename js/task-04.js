const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector("#value")
}

refs.increment.addEventListener("click", () => {
    let elem = Number.parseInt(refs.valueRef.textContent)
    elem += 1
    refs.valueRef.textContent = elem
    console.log(refs.valueRef.textContent);
    console.log(elem);
})

    refs.decrement.addEventListener("click", () => {
    let elem = Number.parseInt(refs.valueRef.textContent)
    elem -= 1
    refs.valueRef.textContent = elem
    console.log(elem);
})


