import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeMessage = signal("It's me Angular");
  textInput = '';
  keyUpHandler = (event: KeyboardEvent) => {
    this.textInput = this.textInput + event.key;
    this.homeMessage = signal(this.textInput);
  };

  counterValue = signal(0);
  increment() {
    this.counterValue.update((val) => val + 1);
  }
  reset() {
    this.counterValue = signal(0);
  }
  decrement() {
    this.counterValue.update((val) => val - 1);
  }
}
