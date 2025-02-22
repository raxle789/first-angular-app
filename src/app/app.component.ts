import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="p-10">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'first-angular-app';
}
