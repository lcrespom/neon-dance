import { neonPoly } from './draw.js'


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


function startGame() {
}

function stepGame() {
}

function drawGame() {
    neonPoly(ctx, 300, 200, 50, 4, Math.PI / 8, 'red')
}

function animateFrame() {
    stepGame()
    drawGame()
    //requestAnimationFrame(animateFrame)
}


function main() {
    startGame()
    animateFrame()
}

main()
