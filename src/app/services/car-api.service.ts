import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore"
import { ICar } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  
  carsDataCollection:AngularFirestoreCollection<ICar>;
  carsData:Observable<ICar[]>;
  allCarsData:ICar[];
  errorMessage:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) { }
  this.carsDataCollection=_afs.collection<ICar>("cars_data");
}
