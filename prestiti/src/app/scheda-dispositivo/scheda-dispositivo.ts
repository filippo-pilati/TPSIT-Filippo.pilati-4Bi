import { Component } from '@angular/core';
import { IDispositivo } from '../dati/modelli/i-dispositivo';

@Component({
  imports: [],
  selector: 'app-scheda-dispositivo',
  styleUrl: './scheda-dispositivo.css',
  templateUrl: './scheda-dispositivo.html',
})
export class SchedaDispositivo {
  dispositivo: IDispositivo = {
    id: 2,
    inventario: 'INV-0102',
    tipo: 'notebook',
    marca: 'Lenovo',
    modello: 'ThinkPad L14',
    anno: 2023,
    stato: 'in prestito'
  };
}
