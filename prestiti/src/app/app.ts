import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchedaDispositivo } from './scheda-dispositivo/scheda-dispositivo';


@Component({
  imports: [RouterOutlet, SchedaDispositivo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prestiti');
}
