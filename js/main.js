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
    // neonPoly(ctx, 75, 200, 50, 3, 0, '#00FF00')
    // neonPoly(ctx, 225, 200, 50, 4, 0 * Math.PI / 8, '#FF0060')
    // neonPoly(ctx, 375, 200, 50, 5, 0, '#00FFFF')
    // neonPoly(ctx, 525, 200, 50, 6, 0, '#FFFF00')
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
