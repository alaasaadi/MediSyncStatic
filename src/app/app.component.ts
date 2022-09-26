import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Stay Tuned - {{value}}</div>`,
})
export class AppComponent {
  value = 'Medi Sync Online';
}
