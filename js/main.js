import { Figure } from './figure.js'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let figures = []


function startGame() {
    figures.push(new Figure({
        x: 0, y: 200, vx: 1, vy: 0, vangle: 0.01,
        r: 50, segments: 3, style: '#00FF00'
    }))
    figures.push(new Figure({
        x: 600, y: 200, vx: -1, vy: 0, vangle: -0.01,
        r: 50, segments: 4, style: '#FF0060'
    }))
    figures.push(new Figure({
        x: 0, y: 0, vx: 1, vy: 0.5, vangle: -0.01,
        r: 50, segments: 5, style: '#00FFFF'
    }))
    figures.push(new Figure({
        x: 600, y: 0, vx: -1, vy: 0.5, vangle: 0.01,
        r: 50, segments: 6, style: '#FFFF00'
    }))
}

function stepGame() {
    for (let f of figures)
        f.step()
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
