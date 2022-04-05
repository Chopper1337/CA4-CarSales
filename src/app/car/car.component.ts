import { Component, Input, OnInit} from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar } from '../interfaces/car';
import { stringify } from 'querystring';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})

export class CarComponent implements OnInit {
  @Input() carsData!:ICar;
  carImageWidth:number=300;

  constructor(private _carAPIService:CarApiService) { }

  ngOnInit(): void {
  }
  
  deleteCar(carID:string){
    this._carAPIService.delCarData(carID)
  }

}
