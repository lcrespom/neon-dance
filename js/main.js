import { neonPoly } from './draw.js'


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


function startGame() {
}

function stepGame() {
}

function drawGame() {
    neonPoly(ctx, 75, 200, 50, 3, 0, '#00FF00')
    neonPoly(ctx, 225, 200, 50, 4, 0 * Math.PI / 8, '#FF0060')
    neonPoly(ctx, 375, 200, 50, 5, 0, '#00FFFF')
    neonPoly(ctx, 525, 200, 50, 6, 0, '#FFFF00')
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
