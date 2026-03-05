import { Component, signal } from '@angular/core';
import { APP_MODE, Header } from 'shared';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('zoneless-app');
  protected readonly appMode = APP_MODE.ZONELESS;
}
