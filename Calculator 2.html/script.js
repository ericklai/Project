let result = document.querySelector('.result').value
function setFocus() {
    let result = document.querySelector('.result')
    result.focus()
    result.classList.remove('position')
    // result.value = ''
}
let num = document.querySelectorAll('.num')
num.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let result = document.querySelector('.result')
            result.value += e.target.textContent
            setFocus()
    })
})

let operator = document.querySelectorAll('.operator')
operator.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let result = document.querySelector('.result')
            result.value += e.target.textContent
            setFocus()
    })
})

let equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    let result = document.querySelector('.result')
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = 'Syntax Error!'
    }
    if (result.value === "Syntax Error!" || result.value === "Infinity" || result.value === "undefined") {
        result.classList.add('error')
        setTimeout( () => {
            result.value = ''
            result.classList.remove('error')
            result.classList.remove('position')
        }, 1000)
    }
    result.classList.add('position')
    // setFocus()
})

let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    let result = document.querySelector('.result')
    result.classList.remove('error')
    result.classList.remove('position')
    result.value = ''
    setFocus()

})

let del = document.querySelector('.del')
del.addEventListener('click', () => {
    let result = document.querySelector('.result')
    result.value = result.value.slice(0, -1)
    result.classList.remove('position')
    result.classList.remove('error')
    setFocus()
})

let percent = document.querySelector('.percent')
percent.addEventListener('click', () => {
    let result = document.querySelector('.result')
        result.value = result.value / 100
})

let bracket = document.querySelector('.bracket')
bracket.addEventListener('click', () => {
    let result = document.querySelector('.result')
        result.value = '(' + result.value + ')'
})
