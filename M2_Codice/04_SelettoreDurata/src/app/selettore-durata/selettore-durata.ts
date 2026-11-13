import { Component, model } from '@angular/core';

const GIORNI_MINIMI = 1;
const GIORNI_MASSIMI = 60;

@Component({
  selector: 'app-selettore-durata',
  templateUrl: './selettore-durata.html',
  styleUrl: './selettore-durata.css',
  imports: []
})
export class SelettoreDurata {
  /**
   * model() dichiara insieme un ingresso e l'uscita 'giorniChange',
   * che Angular crea da sé. Il valore si legge con le parentesi e si
   * scrive con set(): ogni scrittura viene comunicata al padre.
   */
  giorni = model(7);

  diminuisci(): void {
    this.giorni.set(Math.max(GIORNI_MINIMI, this.giorni() - 1));
  }

  aumenta(): void {
    this.giorni.set(Math.min(GIORNI_MASSIMI, this.giorni() + 1));
  }

  /** Imposta la durata standard prevista dal regolamento d'istituto. */
  durataStandard(): void {
    this.giorni.set(7);
  }
}
