import { Component } from '@angular/core';
import { Dispositivo } from './dati/modelli';
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

  // I tre dispositivi sono proprietà separate della classe, perché in questo
  // modulo il template non sa ancora ripetere un blocco per ogni elemento
  // di un vettore. Sarà il primo argomento del modulo M3.
  // Sono i dispositivi 1, 5 e 8 dell'insieme di dati del progetto, uno per
  // ciascun valore di tipo: notebook, tablet e proiettore.
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

  // Il campo del richiedente e il messaggio arrivano dalla seconda lezione:
  // stavano nella scheda, ora stanno qui perché riguardano la pagina intera.
  protected richiedente = '';
  protected messaggio = 'Nessuna richiesta registrata.';
  protected numeroRichieste = 0;

  /** Legge il testo digitato dall'oggetto evento del browser. */
  protected aggiornaRichiedente(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    this.richiedente = campo.value;
  }

  /** Riceve il dispositivo emesso dalla scheda che ha generato l'evento. */
  protected registraRichiesta(dispositivo: Dispositivo): void {
    if (this.richiedente.trim() === '') {
      this.messaggio = 'Indicare il nome del richiedente prima di inviare la richiesta.';
      return;
    }
    this.numeroRichieste = this.numeroRichieste + 1;
    this.messaggio =
      `${this.richiedente} ha richiesto ${dispositivo.inventario}` +
      ` (${dispositivo.marca} ${dispositivo.modello}).`;
  }
}
