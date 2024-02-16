import { Component } from '@angular/core';

@Component({
    selector: 'app-dynamic',
    template: `Я динамичный компонент!`,
    host: {
        class: 'app-dynamic',
    }
})
export class DynamicComponent {}