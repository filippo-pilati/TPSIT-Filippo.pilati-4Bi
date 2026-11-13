import { Component } from '@angular/core';
import { Dispositivo } from './dati/modelli';
import { SchedaDispositivo } from './scheda-dispositivo/scheda-dispositivo';
import { SelettoreDurata } from './selettore-durata/selettore-durata';

@Component({
  selector: 'app-root',
  imports: [SchedaDispositivo, SelettoreDurata],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly titolo = 'Prestito dei dispositivi';
  protected readonly istituto = 'ITT G. Marconi — Rovereto';

  // I dispositivi 1, 5 e 8 dell'insieme di dati del progetto, uno per ciascun
  // valore di tipo. Sono tre proprietà separate perché il template non sa
  // ancora ripetere un blocco per ogni elemento di un vettore: è il modulo M3.
  protected readonly primoDispositivo: Dispositivo = {
    id: 1,
    inventario: 'INV-0101',
    tipo: 'notebook',
    marca: 'Lenovo',
    modello: 'ThinkPad L14',
    anno: 2023,
    stato: 'disponibile'
  };

  protected readonly secondoDispositivo: Dispositivo = {
    id: 5,
    inventario: 'INV-0203',
    tipo: 'tablet',
    marca: 'Samsung',
    modello: 'Galaxy Tab A9',
    anno: 2024,
    stato: 'disponibile'
  };

  protected readonly terzoDispositivo: Dispositivo = {
    id: 8,
    inventario: 'INV-0305',
    tipo: 'proiettore',
    marca: 'Epson',
    modello: 'EB-685W',
    anno: 2021,
    stato: 'disponibile'
  };

  protected richiedente = '';
  protected messaggio = 'Nessuna richiesta registrata.';
  protected numeroRichieste = 0;

  /**
   * Proprietà condivisa con il componente figlio attraverso [(giorni)].
   * Il figlio la scrive, il padre la legge: è una proprietà normale, non
   * readonly, perché il binding bidirezionale le assegna un valore nuovo.
   */
  protected giorniPrestito = 7;

  protected aggiornaRichiedente(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    this.richiedente = campo.value;
  }

  protected registraRichiesta(dispositivo: Dispositivo): void {
    if (this.richiedente.trim() === '') {
      this.messaggio = 'Indicare il nome del richiedente prima di inviare la richiesta.';
      return;
    }
    this.numeroRichieste = this.numeroRichieste + 1;
    this.messaggio =
      `${this.richiedente} ha richiesto ${dispositivo.inventario}` +
      ` (${dispositivo.marca} ${dispositivo.modello}) per ${this.giorniPrestito} giorni.`;
  }
}
