import { neonPoly } from './draw.js'


export class Figure {
    constructor({
        x, y, vx = 0, vy = 0, r, angle = 0, vangle = 0, segments, style
    }) {
        this.cx = x
        this.cy = y
        this.r = r
        this.angle = angle
        this.segments = segments
        this.style = style
        this.vx = vx
        this.vy = vy
        this.vangle = vangle
        this.glow = { width: 5, blur: 4 }
    }

    step() {
        this.cx += this.vx
        this.cy += this.vy
        this.angle += this.vangle
        // this.tick++
        // this.glow.width = 5 + Math.sin(this.tick/10) 
    }

    draw(ctx) {
        neonPoly(ctx, this)
    }
}