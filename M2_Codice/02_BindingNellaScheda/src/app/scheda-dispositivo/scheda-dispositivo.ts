import { Component } from '@angular/core';
import { Dispositivo } from '../dati/modelli';

// Durata di vita convenzionale di un dispositivo dell'istituto, in anni.
const VITA_ATTESA_ANNI = 6;

@Component({
  selector: 'app-scheda-dispositivo',
  templateUrl: './scheda-dispositivo.html',
  styleUrl: './scheda-dispositivo.css',
  imports: []
})
export class SchedaDispositivo {
  // Seconda lezione: si passa al dispositivo INV-0102, che è in prestito.
  // Serve uno stato diverso da 'disponibile' per vedere il colore del bordo
  // cambiare e il pulsante disattivarsi: con un dispositivo libero i binding
  // ci sarebbero comunque, ma non si osserverebbe nulla.
  dispositivo: Dispositivo = {
    id: 2,
    inventario: 'INV-0102',
    tipo: 'notebook',
    marca: 'Lenovo',
    modello: 'ThinkPad L14',
    anno: 2023,
    stato: 'in prestito'
  };

  // Nome digitato dall'utente: viene aggiornato dal binding di evento.
  richiedente = '';

  // Messaggio mostrato nella scheda dopo la richiesta.
  messaggio = '';

  /** Percentuale di vita già trascorsa, da 0 a 100. Usata dal binding di stile. */
  percentualeVita(): number {
    const anniTrascorsi = new Date().getFullYear() - this.dispositivo.anno;
    const percentuale = (anniTrascorsi / VITA_ATTESA_ANNI) * 100;
    return Math.min(100, Math.max(0, Math.round(percentuale)));
  }

  /** Legge il testo digitato dall'oggetto evento del browser. */
  aggiornaRichiedente(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    this.richiedente = campo.value;
  }

  /** Reagisce al comando: per ora si limita a comporre un messaggio. */
  richiedi(): void {
    if (this.richiedente.trim() === '') {
      this.messaggio = 'Indicare il nome del richiedente.';
      return;
    }
    this.messaggio = `Richiesta di ${this.richiedente} per ${this.dispositivo.inventario}.`;
  }
}
