import { Component } from '@angular/core';

@Component({
  selector: 'company-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company-app';

  display: number = 0;

  toggle(display: number) {
    this.display = display;
  }
}


