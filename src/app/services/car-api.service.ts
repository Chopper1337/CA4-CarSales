import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/compat/firestore"
import { ICar } from '../interfaces/car';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  
  carsDataCollection:AngularFirestoreCollection<ICar>;
  carsData!: Observable<ICar[]>;
  allCarsData!:ICar[];
  errorMessage!:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) { 
    this.carsDataCollection=_afs.collection<ICar>("cars_data");
  }
  
  getCarData():Observable<ICar[]>{
    this.carsData = this.carsDataCollection.valueChanges({idField:'id'});
    this.carsData.subscribe(
      data => console.log("getCarsData: " + JSON.stringify(data))
    )
    return this.carsData;
  }
  
  addCarData(car:ICar): void {
    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
  }

  delCarData(CarID:string): void{
    this.carsDataCollection.doc(CarID).delete();
  }
  
  //private handleError (err:HttpErrorResponse){console.log('CarApiService: ' + err.message);    return Observable.throw(err.message);  }
}
