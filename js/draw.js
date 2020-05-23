/**
 * 
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} cx
 * @param {number} cy
 * @param {number} r
 * @param {number} sides
 * @param {number} angle
 * @param {any} style
 */
export function drawPoly(ctx, cx, cy, r, sides, angle, style) {
    let angleInc = 2 * Math.PI / sides
    angle -= Math.PI / 2 + angleInc / 2
    ctx.beginPath()
    let [ x, y ] = pointAtAngle(cx, cy, r, angle)
    ctx.moveTo(x, y)
    for (let i = 0; i < sides; i++) {
        angle += angleInc;
        [ x, y ] = pointAtAngle(cx, cy, r, angle)
        ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.stroke()
}

export function neonPoly(ctx, cx, cy, r, sides, angle, style) {
    ctx.save()
    ctx.strokeStyle = style
    ctx.lineWidth = 5
    ctx.filter = 'blur(4px)'
    drawPoly(ctx, cx, cy, r, sides, angle, style)
    ctx.lineWidth = 2
    ctx.filter = 'none'
    drawPoly(ctx, cx, cy, r, sides, angle, style)
    ctx.restore()
}

function pointAtAngle(x, y, r, angle) {
    return [
        x + r * Math.sin(angle),
        y + r * Math.cos(angle)
    ]
}