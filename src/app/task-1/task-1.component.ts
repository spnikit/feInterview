import {Component, DestroyRef} from '@angular/core';
import {Observable, of, switchMap, takeWhile, tap, timer} from 'rxjs';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

enum ServerResponse {
  Done = 'Done',
}

@Component({
  selector: 'app-task-1',
  template: '<h1>Task #1</h1>',
})
export class Task1Component {

  /**
   *
   */
  constructor(private destroyRef: DestroyRef) {
    this.task1();
  }

  /**
   * Каждую секунду нам нужно делать запрос на сервер, чтобы проверить статус объекта.
   *
   * Задача:
   * 1. Улучшите код функции;
   * 2. Когда метод httpEmit вернет Done, прекратите выполнение запросов;
   * 3. Прекратите выполнение запросов в момент ухода со страницы.
   *
   * Сообщения в консоле должны быть следующими:
   * Pending... 0
   * Pending... 1
   * Pending... 2
   * Pending... 3
   * Pending... 4
   * Done
   */
  private task1(): void {
    timer(0, 1000).pipe(
      switchMap(timerCount => this.httpEmit(timerCount)),
      tap(console.log),
      takeWhile(emitValue => emitValue !== ServerResponse.Done),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe()
  }

  /**
   *
   * @param value
   * @private
   */
  private httpEmit(value: number): Observable<string | ServerResponse> {
    return of(value < 5 ? `Pending... ${value}` : ServerResponse.Done);
  }
}
