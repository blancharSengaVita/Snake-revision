import {settings} from "../settings";

export class Game {
     private readonly resetForm : HTMLFormElement;

     constructor() {
          this.addEventListener()
          this.resetForm = document.querySelector(settings.forms.domSelector)
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

