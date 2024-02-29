import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";

@Component({
  selector: 'app-task-3',
  template: `<h1>Task #3</h1>
  <button (click)="createComponent()">Создать</button>
  <br/>

  <div #container>
    <!-- PLACE FOR RENDERER -->
  </div>`,
})
export class Task3Component {


  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  /**
   * 1. Клик на "Создать" должен создать компонент "DynamicComponent" внутри тега div: <!-- PLACE FOR RENDERER -->
   * 2. Получите инстанц компонента внутри функции и выведите в консоль значение из DynamicComponent.value
   *
   * Сообщения в консоле должны быть следующими:
   * 1й клик на createComponent -> Какие-то данные...
   * 2й клик на createComponent -> Какие-то данные...
   * 3й клик на createComponent -> Какие-то данные...
   * ...
   */
  public createComponent(): void {
    if (this.container) {
      this.container.clear();
      const dynamicComponentRef = this.container.createComponent(DynamicComponent);
      console.log(dynamicComponentRef.instance.value);
    }
  }
}
