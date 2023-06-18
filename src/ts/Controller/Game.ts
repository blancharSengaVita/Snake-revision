import {settings} from "../settings";
import {Canvas} from "../framework-2023/Canvas";
import {BodyItem} from "../Models/BodyItem";

export class Game {
     private readonly resetForm : HTMLFormElement;
     private readonly snakeCanvas: Canvas;
     // private snake: Snake;
     private readonly bodyItem: BodyItem;


     constructor() {
          this.addEventListener()
          this.resetForm = document.querySelector(settings.forms.domSelector)

          this.snakeCanvas  = new Canvas(document.querySelector(settings.canvas.snake.domSelector), {width: settings.canvas.size.width, height: settings.canvas.size.height});
          this.bodyItem = new BodyItem({x:40, y:40}, this.snakeCanvas)
          this.bodyItem.draw();

          // this.snake = new Snake(this.snakeCanvas);
     }

     private addEventListener() {
          window.addEventListener('submit', (e:SubmitEvent)=>{
               e.preventDefault();
               this.reset();
          });
     }

     private reset(){
          this.resetForm.classList.add(settings.forms.hideClass)
     }
}

