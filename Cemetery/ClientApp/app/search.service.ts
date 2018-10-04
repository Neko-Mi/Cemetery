import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cemetery } from './cemetery';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = '/api/cemeteries';  // URL to web api

  constructor(private http: HttpClient) { }


  getSearch(cem: string): Observable<Cemetery[]>{ //эту часть похоже придется долго пилить
    if (!cem.trim()) {
      // if not search term, return empty cemetery array.
      return of([]);
    }
    //return this.http.get('');
    return this.http.get<Cemetery[]>(`${this.url}/${cem}`);
    
  }


}
