const inputRef = document.querySelector("#validation-input")

inputRef.addEventListener('blur', onFocusInput)

function onFocusInput(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
    } else {
        event.currentTarget.classList.add("invalid")
        event.currentTarget.classList.remove("valid")
    }

}

