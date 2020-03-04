import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public nombredepersona; 

  public incrementCounter() {
    this.currentCount++;
    if (this.currentCount <= 1) {

      this.nombredepersona = 'Joaquin';

    } else if (this.currentCount == 2) {

      this.nombredepersona = 'Gabriel';

    } else {

      this.nombredepersona = 'Mariano';

    }
  }
}
