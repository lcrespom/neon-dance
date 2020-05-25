import { neonSegment } from './draw.js'

export const FLOOR = 30
export const CEILING = 30


export function stepBoard(figures, height) {
    for (let f of figures) {
        let { miny, maxy } = f.getBounds()
        if (miny < FLOOR || maxy > height - CEILING)
            figureFail(f)
    }
}

export function drawBoard(ctx, tick) {
    let width = ctx.canvas.width
    let height = ctx.canvas.height
    let gloww = 5 + 1 * Math.sin(tick / 20)
    neonSegment(ctx, {
        x1: 0, y1: FLOOR, x2: width, y2: FLOOR,
        style: '#FFFFFF', glow: { width: gloww, blur: 5 }
    })
    neonSegment(ctx, {
        x1: 0, y1: height - CEILING, x2: width, y2: height - CEILING,
        style: '#FFFFFF', glow: { width: gloww, blur: 5 }
    })
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
