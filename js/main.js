import { drawPoly } from './draw.js'


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


function startGame() {
}

function stepGame() {
}

function drawGame() {
    ctx.filter = 'blur(4px)'
    drawPoly(ctx, 200, 200, 50, 4, Math.PI / 8, '#ffee80')
    ctx.filter = 'none'
    drawPoly(ctx, 200, 200, 50, 4, Math.PI / 8, 'red')
    ctx.filter = 'none'
    drawPoly(ctx, 300, 200, 50, 4, Math.PI / 8, 'red')
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
