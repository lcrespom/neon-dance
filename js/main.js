import { Figure } from './figure.js'
import { CEILING, stepBoard, drawBoard } from './board.js'

const RADIUS = 40
const MAX_DROP_PERIOD = 60

let canvas = document.getElementById('canvas')
let height = canvas.height, width = canvas.width
let ctx = canvas.getContext('2d')
let figures = []
let tick = 0
let dropPeriod = MAX_DROP_PERIOD


function getFigureStyle(segments) {
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
    let cy = 200 + Math.random() * (height - 392 - RADIUS - CEILING)
    let vx = 1 + Math.random() * 2
    if (!left) vx = -vx
    let vy = 2 + Math.random() * 4
    let vangle = 0.04 - Math.random() * 0.08
    let segments = 3 + Math.floor(Math.random() * 4)
    return new Figure({
        cx, cy, vx, vy, vangle,
        r: RADIUS, segments, style: getFigureStyle(segments)
    })
}


function handleKeyDown(evt) {
    let key2segments = { 'f': 3, 'j': 4, 'd': 5, 'k': 6 }
    let segments = key2segments[evt.key]
    if (!segments) return
    let lowerF = { cy: 2 * height }
    for (let f of figures) {
        if (!f.dead && f.segments == segments && lowerF.cy > f.cy)
            lowerF = f
    }
    if (lowerF)
        lowerF.vy = 6
}

function startGame() {
    ctx.scale(1, -1)
    ctx.translate(0, -height)
    document.body.addEventListener('keydown', handleKeyDown)
}

function stepGame() {
    if (tick % Math.floor(dropPeriod) == 0)
        figures.push(randomFigure())
    if (dropPeriod > 15) dropPeriod -= 0.01
    tick++
    stepBoard(figures, height)
    for (let f of figures) {
        f.step()
    }
    figures = figures.filter(f => f.cy + RADIUS > 0)
}

function drawGame() {
    for (let f of figures)
        f.draw(ctx)
    drawBoard(ctx, tick)
}

function animateFrame(t) {
    stepGame()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGame()
    requestAnimationFrame(animateFrame)
}


function main() {
    startGame()
    animateFrame()
}

main()
