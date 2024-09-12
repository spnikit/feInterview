import {Component, effect, ElementRef, inject, Renderer2, viewChildren} from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";


@Component({
  selector: 'app-task-4',
  template: `<h1>Task #4</h1>
  <br>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  <app-dynamic></app-dynamic>
  `,
})
export class Task4Component {

  private classToAdd = 'selected'
  private renderer = inject(Renderer2)

  private queryList = viewChildren(DynamicComponent, {read: ElementRef})


  constructor() {
    effect(() => {
      this.queryList().forEach((dynamicComponent, idx) => {
        if (idx % 2 === 0) {
          this.renderer.addClass(dynamicComponent.nativeElement, this.classToAdd)
        }
      })
    });

  }


  /**
   * Задача:
   *
   * Поставьте каждому четному элементу <app-dynamic> во вью CSS класс ".selected",
   * не изменяя шаблон компонента, используя только инструменты Angular.
   */
}
