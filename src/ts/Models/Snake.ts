import {BodyItem} from "./BodyItem";
import {settings} from "../settings";
import {Canvas} from "../framework-2023/Canvas";
import {Animation} from "./Animation";
import {Animatable} from "../framework-2023/Types/Animatable";
import {Direction} from "../framework-2023/Types/Direction";
import {Position} from "../framework-2023/Types/Position";

export class Snake implements Animatable{
    private readonly tail : BodyItem[];
    private canvas: Canvas;
    private current: { direction: Direction };
    private position: Position;

    constructor(canvas : Canvas, current : {direction : Direction}) {
        this.canvas = canvas;
        this.current = current;
        this.tail = [];
    }

    public createSnake() {
        for (let i = 0; i < settings.snake.initialCount; i++) {
            this.tail.push(new BodyItem({x: this.canvas.width/2 - (settings.snake.unit * 3) + (settings.snake.unit * i) + 1, y: this.canvas.height/2 + 1}, this.canvas))
        }
    }

    clear(): void {
        this.tail.forEach((bodyItem)=>{
            bodyItem.clear();
        });
    }

    draw(): void {
        this.tail.forEach((bodyItem)=>{
           bodyItem.draw()
        });
    }

    update(): void {
        this.tail.shift();

        this.position = {
            x: this.tail[this.tail.length - 1].position.x,
            y: this.tail[this.tail.length - 1].position.y
        }

        switch (this.current.direction){
            case Direction.right: {
                this.position.x += settings.snake.unit;
                break;
            }
            case Direction.left: {
                this.position.x -= settings.snake.unit;
                break;
            }
            case Direction.up: {
                this.position.y -= settings.snake.unit;
                break;
            }
            case Direction.down: {
                this.position.y += settings.snake.unit;
                break;
            }
        }

        this.tail.push(new BodyItem({
            x: this.position.x,
            y: this.position.y
            }
            ,this.canvas
        ));
    }

}