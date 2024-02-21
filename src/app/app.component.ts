import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <a routerLink="/task-1">Task #1</a> <br/>
        <a routerLink="/task-2">Task #2</a> <br/>
        <a routerLink="/task-3">Task #3</a> <br/>
        <a routerLink="/task-4">Task #4</a> <br/>
        <router-outlet/>`,
})
export class AppComponent {
}
