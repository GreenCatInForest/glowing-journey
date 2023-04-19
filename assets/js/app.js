const toggleDarkModeButton = document.querySelector('button#toggleDarkMode')
const numberCheckerForm = document.querySelector('#numberCheckerForm')

// define a function that tells me
// whether a number is odd or even
function oddOrEvenES5(num) {
    return !(num % 2)
}

// define a function that tells me
// whether a number is odd or even
const oddOrEvenES6 = (num) => {
    return !(num % 2)
}

toggleDarkModeButton.addEventListener('click', () => {
    const docBod = document.querySelector('body')
    docBod.classList.toggle('dark')
})

numberCheckerForm.addEventListener('submit', (event) => {
    const numberCheckerInput = document.querySelector('#numberCheckerInput')
    const numberCheckerResult = document.querySelector('#numberCheckerResult')
    const numberValue = numberCheckerInput.value
    event.preventDefault()

    if (oddOrEvenES5(numberValue)) {
        numberCheckerResult.textContent = 'Even'
    } else {
        numberCheckerResult.textContent = 'Odd'
    }
})
