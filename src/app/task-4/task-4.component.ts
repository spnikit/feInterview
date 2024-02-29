import {AfterViewInit, Component, ElementRef, inject, QueryList, Renderer2, ViewChildren} from '@angular/core';
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
export class Task4Component implements AfterViewInit {

  private classToAdd = 'selected'
  private renderer = inject(Renderer2)

  @ViewChildren(DynamicComponent, {read: ElementRef}) queryList!: QueryList<ElementRef>


  ngAfterViewInit(): void {
    this.queryList.forEach((dynamicComponent, idx) => {
      if (idx % 2 === 0) {
        this.renderer.addClass(dynamicComponent.nativeElement, this.classToAdd)
      }
    })
  }


  /**
   * Задача:
   *
   * Поставьте каждому четному элементу <app-dynamic> во вью CSS класс ".selected",
   * не изменяя шаблон компонента, используя только инструменты Angular.
   */
}
