const button=document.getElementById('button')

const background = ["#ff3381", "#93f", "#f56", "#eeff00", "003cff"]

function colorChangeA() {
    let limit = background.length
    let index = Math.floor(Math.random() * limit);
    button1.style.background = background[index]
    button1.style.color = '#111'
}

function colorChangeB() {
    let limit = background.length
    let index = Math.floor(Math.random() * limit);
    button2.style.background = background[index]
    button2.style.color = '#111'
}

function colorChangeC() {
    let limit = background.length
    let index = Math.floor(Math.random() * limit);
    button3.style.background = background[index]
    button3.style.color = '#111'
}

function colorChangeD() {
    let limit = background.length
    let index = Math.floor(Math.random() * limit);
    button4.style.background = background[index]
    button4.style.color = '#111'
}