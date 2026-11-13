import { Component } from '@angular/core';
import { Dispositivo } from '../dati/modelli';

@Component({
  selector: 'app-scheda-dispositivo',
  templateUrl: './scheda-dispositivo.html',
  styleUrl: './scheda-dispositivo.css',
  imports: []
})
export class SchedaDispositivo {
  // Prima lezione: il dispositivo è scritto dentro il componente.
  // Nella terza lezione questo dato arriverà dal componente padre.
  dispositivo: Dispositivo = {
    id: 1,
    inventario: 'INV-0101',
    tipo: 'notebook',
    marca: 'Lenovo',
    modello: 'ThinkPad L14',
    anno: 2023,
    stato: 'disponibile'
  };
}
