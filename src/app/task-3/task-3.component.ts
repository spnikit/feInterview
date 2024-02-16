import { Component } from '@angular/core';

@Component({
  selector: 'app-task-3',
  template: `<h1>Task #3</h1>
  <button (click)="createComponent()">Создать</button>
  <br/>
  
  <div>Клик на "Создать" должен создать компонент "DynamicComponent" здесь:
  </div>`,
})
export class Task3Component {

  /**
   *
   */
  public createComponent(): void {
  }
}
