import {Square} from "../framework-2023/Shapes/Square";
import {Position} from "../framework-2023/Types/Position";
import {settings} from "../settings";
import {Canvas} from "../framework-2023/Canvas";

export class BodyItem extends Square {
    constructor(position: Position, canvas: Canvas) {
        super({
            canvas: canvas,
            color: settings.snake.color,
            position: position,
            side: settings.snake.unit,
        });
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = settings.snake.borderColor;
        this.ctx.fillStyle = settings.snake.color;
        this.ctx.rect(this.position.x + this.ctx.lineWidth, this.position.y + this.ctx.lineWidth, this.side - this.ctx.lineWidth, this.side - this.ctx.lineWidth)
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
}