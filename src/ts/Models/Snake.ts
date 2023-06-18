import {BodyItem} from "./BodyItem";
import {settings} from "../settings";
import {Canvas} from "../framework-2023/Canvas";
import {Animation} from "./Animation";
import {Animatable} from "../framework-2023/Types/Animatable";

export class Snake implements Animatable{
    private readonly tails : BodyItem[];
    private canvas: Canvas;

    constructor(canvas : Canvas) {
        this.canvas = canvas;
        this.tails = [];
    }

    public createSnake() {
        for (let i = 0; i < settings.snake.initialCount; i++) {
            this.tails.push(new BodyItem({x: this.canvas.width/2 - (settings.snake.unit * 3) + (settings.snake.unit * i), y: this.canvas.height/2}, this.canvas))
        }
    }

    clear(): void {
    }

    draw(): void {
        this.tails.forEach((bodyItem)=>{
           bodyItem.draw()
        });
    }

    update(): void {
    }
}