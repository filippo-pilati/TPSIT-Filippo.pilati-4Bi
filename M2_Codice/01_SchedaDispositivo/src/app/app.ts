// Il componente radice di M1 viene ampliato, non sostituito: restano il titolo,
// il sottotitolo e la struttura della pagina. Cambiano due cose soltanto:
// la scheda del dispositivo non è più scritta qui dentro, e la classe
// SchedaDispositivo compare fra gli imports.

import { Component } from '@angular/core';
import { SchedaDispositivo } from './scheda-dispositivo/scheda-dispositivo';

@Component({
  selector: 'app-root',
  imports: [SchedaDispositivo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly titolo = 'Prestito dei dispositivi';
  protected readonly istituto = 'ITT G. Marconi — Rovereto';
}
