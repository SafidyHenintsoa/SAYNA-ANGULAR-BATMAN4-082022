import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarteService {
  constructor(private http: HttpClient) {}
  getCartes() {
    return this.http.get(' http://localhost:3000/carte').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getCarteById(id: number) {
    return this.http.get(' http://localhost:3000/carte/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
