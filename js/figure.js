import { neonPoly } from './draw.js'


export class Figure {
    constructor({
        x, y, vx = 0, vy = 0, r, angle = 0, vangle = 0, segments, style
    }) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.r = r
        this.angle = angle
        this.vangle = vangle
        this.segments = segments
        this.style = style
    }

    step() {
        this.x += this.vx
        this.y += this.vy
        this.angle += this.vangle
    }

    draw(ctx) {
        neonPoly(ctx, this.x, this.y, this.r, this.segments, this.angle, this.style)
    }
}