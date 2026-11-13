// Terza lezione. Rispetto alla seconda cambiano due cose:
//  - il dispositivo non è più scritto qui dentro, ma arriva dal padre;
//  - il campo del richiedente e il messaggio di conferma non spariscono:
//    si spostano nel componente radice, perché il richiedente è uno solo per
//    tutta la pagina e non ha senso ripeterlo in ciascuna delle tre schede.

import { Component, input, output } from '@angular/core';
import { Dispositivo } from '../dati/modelli';

const VITA_ATTESA_ANNI = 6;

@Component({
  selector: 'app-scheda-dispositivo',
  templateUrl: './scheda-dispositivo.html',
  styleUrl: './scheda-dispositivo.css',
  imports: []
})
export class SchedaDispositivo {
  /** Dato ricevuto dal padre. Obbligatorio: senza, il template del padre non compila. */
  dispositivo = input.required<Dispositivo>();

  /** Ingresso facoltativo: il padre può chiedere la versione ridotta. */
  compatta = input(false);

  /** Evento inviato al padre quando l'utente preme il comando. */
  richiesta = output<Dispositivo>();

  percentualeVita(): number {
    const anniTrascorsi = new Date().getFullYear() - this.dispositivo().anno;
    const percentuale = (anniTrascorsi / VITA_ATTESA_ANNI) * 100;
    return Math.min(100, Math.max(0, Math.round(percentuale)));
  }

  /**
   * Il figlio non decide che cosa succede: annuncia al padre che l'utente
   * ha chiesto questo dispositivo e gli passa il dispositivo stesso.
   */
  richiedi(): void {
    this.richiesta.emit(this.dispositivo());
  }
}
