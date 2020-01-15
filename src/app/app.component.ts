import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h2> This is internal template </h2>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8-Demo1';
  userName = "B38441"
  count = 0;

  getCount(ct) {
    this.count = ct;
  }

  sum(a,b) {
    let c  = a + b;
    return c;
  }
}
