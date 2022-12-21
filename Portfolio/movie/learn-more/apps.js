const btn = document.querySelector('#btn-sign-up')

let colors = [
    'red', "blue", "#ef5a2c","green"
]
let i = 0

let buttonWithColors = () => {
    btn.style.backgroundColor = colors[i]

    if(i == colors.length -1) i = 0    
        i++
}

setInterval(buttonWithColors, 1300)




        