import { Figure } from './figure.js'
import { neonSegment } from './draw.js'

const RADIUS = 40
const FLOOR_CEILING = 30
let canvas = document.getElementById('canvas')
let height = canvas.height, width = canvas.width
let ctx = canvas.getContext('2d')
let figures = []
let tick = 0


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
    let cy = 200 + Math.random() * (height - 392 - RADIUS - FLOOR_CEILING)
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
    tick = 0
    ctx.scale(1, -1)
    ctx.translate(0, -height)
    document.body.addEventListener('keydown', handleKeyDown)
}

function figureFail(f) {
    if (f.dead) return
    f.dead = true
    f.style = '#0088FF'
    f.vx = 0
    if (f.vy < 0)
        f.vy = -f.vy / 2
    else
        f.vy = 0
}

function stepGame() {
    if (tick % 60 == 0)
        figures.push(randomFigure())
    tick++
    for (let f of figures) {
        let { miny, maxy } = f.getBounds()
        if (miny < FLOOR_CEILING || maxy > height - FLOOR_CEILING)
            figureFail(f)
        f.step()
    }
    figures = figures.filter(f => f.cy + RADIUS > 0)
}

function drawFloorAndCeiling() {
    let gloww = 5 + 1 * Math.sin(tick / 20)
    neonSegment(ctx, {
        x1: 0, y1: 40, x2: width, y2: 40,
        style: '#FFFFFF', glow: { width: gloww, blur: 5 }
    })
    neonSegment(ctx, {
        x1: 0, y1: height - 40, x2: width, y2: height - 40,
        style: '#FFFFFF', glow: { width: gloww, blur: 5 }
    })
}

function drawGame() {
    for (let f of figures)
        f.draw(ctx)
    drawFloorAndCeiling()
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
