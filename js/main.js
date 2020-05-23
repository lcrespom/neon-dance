import { Figure } from './figure.js'

const GRAVITY = -0.1
const RADIUS = 30
let canvas = document.getElementById('canvas')
let height = canvas.height, width = canvas.width
let ctx = canvas.getContext('2d')
let figures = []
let tick = 0


function getStyle(segments) {
    switch(segments) {
        case 3: return '#00FF00'
        case 4: return '#FF0060'
        case 5: return '#00FFFF'
        case 6: return '#FFFF00'
        default: throw new Error('Unexpected number of segments')
    }
}

function randomFigure() {
    let left = Math.random() < 0.5
    let cx = left ? 0 : width
    let cy = 200 + Math.random() * (height - 300)
    let vx = 1 + Math.random() * 2
    if (!left) vx = -vx
    let vy = 2 + Math.random() * 4
    let vangle = 0.04 - Math.random() * 0.08
    let segments = 3 + Math.floor(Math.random() * 4)
    return new Figure({
        cx, cy, vx, vy, vangle,
        r: RADIUS, segments, style: getStyle(segments)
    })
}

function startGame() {
    tick = 0
    ctx.scale(1, -1)
    ctx.translate(0, -height)
}

function stepGame() {
    tick++
    if (tick % 30 == 0)
        figures.push(randomFigure())
    for (let f of figures) {
        f.vy += GRAVITY
        f.step()
    }
    figures = figures.filter(f => f.cy > 0)
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
