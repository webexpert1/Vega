import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getMakes() {
    return this.http.get('http://localhost:5000/api/makes').pipe(
      map(res => res));
  }


  getFeatures() {
    return this.http.get('http://localhost:5000/api/features').pipe(
      map((res) => res)
    );
  }
}
