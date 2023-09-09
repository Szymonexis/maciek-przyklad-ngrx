import { Component } from '@angular/core';
import { CounterFacade } from 'src/app/state/counter/counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counterCurrentValue$ = this.counterFacade.counterCurrentValue$;

  counterValue = null;

  constructor(private counterFacade: CounterFacade) {}

  onIncrementClick(): void {
    this.counterFacade.incrementCounter();
  }

  onDecrementClick(): void {
    this.counterFacade.decrementCounter();
  }

  onCounterValueChange(event: Event): void {
    console.log(event);
  }

  onSetClick(counterValue: number | null): void {
    if (!counterValue) {
      return;
    }

    this.counterFacade.setCounter({ mainValue: counterValue });
  }
}
