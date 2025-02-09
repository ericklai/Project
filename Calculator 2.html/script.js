let result = document.querySelector('.result').value
let num = document.querySelectorAll('.num')
num.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let result = document.querySelector('.result')
            result.value += e.target.textContent
    })
})

let operator = document.querySelectorAll('.operator')
operator.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let result = document.querySelector('.result')
            result.value += e.target.textContent
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
    }
    result.classList.add('position')
})

let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    let result = document.querySelector('.result')
    result.classList.remove('error')
    result.classList.remove('position')
        result.value = ''
})

let del = document.querySelector('.del')
del.addEventListener('click', () => {
    let result = document.querySelector('.result')
        result.value = result.value.slice(0, -1)
        result.classList.remove('position')
})

let percent = document.querySelector('.percent')
percent.addEventListener('click', () => {
    let result = document.querySelector('.result')
        result.value = result.value / 100
})


