import {settings} from "../settings";
import {Canvas} from "../framework-2023/Canvas";
import {BodyItem} from "../Models/BodyItem";
import {Snake} from "../Models/Snake";

export class Game {
     private readonly resetForm : HTMLFormElement;
     private readonly snakeCanvas: Canvas;
     private snake: Snake;


     constructor() {
          this.addEventListener()
          this.resetForm = document.querySelector(settings.forms.domSelector)

          this.snakeCanvas  = new Canvas(document.querySelector(settings.canvas.snake.domSelector), {width: settings.canvas.size.width, height: settings.canvas.size.height});

          this.snake = new Snake(this.snakeCanvas);
     }

     private addEventListener() {
          window.addEventListener('submit', (e:SubmitEvent)=>{
               e.preventDefault();
               this.reset();
          });
     }

     private reset(){
          this.resetForm.classList.add(settings.forms.hideClass)
          this.resetSnake()
     }

     resetSnake(){
          this.snake.createSnake();
          this.snake.draw();
     }
}

