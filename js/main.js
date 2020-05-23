import { Figure } from './figure.js'

const GRAVITY = -0.1
let canvas = document.getElementById('canvas')
let height = canvas.height, width = canvas.width
let ctx = canvas.getContext('2d')
let figures = []


function startGame() {
    ctx.scale(1, -1)
    ctx.translate(0, -height)
    figures.push(new Figure({
        x: 0, y: 400, vx: 2, vy: 3, vangle: 0.01,
        r: 50, segments: 3, style: '#00FF00'
    }))
    figures.push(new Figure({
        x: width, y: 400, vx: -2, vy: 3, vangle: -0.01,
        r: 50, segments: 4, style: '#FF0060'
    }))
    figures.push(new Figure({
        x: 0, y: 200, vx: 3, vy: 6, vangle: -0.01,
        r: 50, segments: 5, style: '#00FFFF'
    }))
    figures.push(new Figure({
        x: width, y: 200, vx: -3, vy: 6, vangle: 0.01,
        r: 50, segments: 6, style: '#FFFF00'
    }))
}

function stepGame() {
    for (let f of figures) {
        f.vy += GRAVITY
        f.step()
    }
}

function drawGame() {
    for (let f of figures)
        f.draw(ctx)
}

function animateFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    stepGame()
    drawGame()
    requestAnimationFrame(animateFrame)
}


function main() {
    startGame()
    animateFrame()
}

main()
