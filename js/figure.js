import { neonPoly } from './draw.js'


export class Figure {
    constructor({
        cx, cy, vx = 0, vy = 0, r, angle = 0, vangle = 0, segments, style
    }) {
        this.cx = cx
        this.cy = cy
        this.r = r
        this.angle = angle
        this.segments = segments
        this.style = style
        this.vx = vx
        this.vy = vy
        this.vangle = vangle
        this.glow = { width: 6, blur: 5 }
    }

    step() {
        this.cx += this.vx
        this.cy += this.vy
        this.angle += this.vangle
    }

    draw(ctx) {
        this.points = neonPoly(ctx, this)
    }
}