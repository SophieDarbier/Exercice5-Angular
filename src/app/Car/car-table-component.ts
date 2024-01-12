import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table-component.html',
})
export class CarTableComponent {
  cars: Car[] = [
    { id: 0, marque: 'Kia', modele: '550' },
    { id: 1, marque: 'Mercedes', modele: 'LCK' },
    { id: 2, marque: 'Porsche', modele: 'GT3 RS' },
    { id: 3, marque: 'Marc', modele: 'Ortoli' },
  ];

  selectedCar: Car = this.cars[0];

  showDetails(car: Car): void {
    this.selectedCar = car;
  }
}
