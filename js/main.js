import { neonPoly } from './draw.js'


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


function startGame() {
}

function stepGame() {
}

function drawGame() {
    neonPoly(ctx, 150, 200, 50, 3, 0, '#00FF00')
    neonPoly(ctx, 300, 200, 50, 4, 0 * Math.PI / 8, '#FF0060')
    neonPoly(ctx, 450, 200, 50, 5, 0, '#00FFFF')
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
