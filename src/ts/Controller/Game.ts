import {settings} from "../settings";
import {Canvas} from "../framework-2023/Canvas";
import {Snake} from "../Models/Snake";
import {Direction} from "../framework-2023/Types/Direction";
import {Animation} from "../Models/Animation";
import {GameStatus} from "../framework-2023/Types/GameStatus";

export class Game {
    private readonly resetForm: HTMLFormElement;
    private readonly snakeCanvas: Canvas;
    private readonly snake: Snake;
    private readonly current: { direction: Direction }
    private gameStatus: GameStatus;
    private animation: Animation;


    constructor() {
        this.current = {direction: Direction.right};
        this.addEventListener();
        this.resetForm = document.querySelector(settings.forms.domSelector);

        this.snakeCanvas = new Canvas(document.querySelector(settings.canvas.snake.domSelector), {
            width: settings.canvas.size.width,
            height: settings.canvas.size.height
        });

        this.snake = new Snake(this.snakeCanvas, this.current);

        this.gameStatus = {start: false}
        this.animation = new Animation(this.gameStatus);
        this.animation.addAnimatable(this.snake);
    }

    private addEventListener() {
        window.addEventListener('submit', (e: SubmitEvent) => {
            e.preventDefault();
            this.reset();
        });

        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "ArrowRight" :
                    this.current.direction = Direction.right
                    break;
                case "ArrowLeft" :
                    this.current.direction = Direction.left
                    break;
                case "ArrowUp" :
                    this.current.direction = Direction.up
                    break;
                case "ArrowDown" :
                    this.current.direction = Direction.down
                    break;
            }
        });
    }

    private reset() {
        this.resetForm.classList.add(settings.forms.hideClass)
        this.resetSnake()
        this.gameStatus.start = true;
        this.animation.animate();
    }

    resetSnake() {
        this.current.direction = Direction.right
        this.snake.clear();
        this.snake.createSnake();
        this.snake.draw();
    }
}

