import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeModule } from '../home.module';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://rickandmortyapi.com/api';


  //TODO:Sifu1982 nunca tipar como any nada, este trabajo te lo voy a dejar a ti Amparo, a ver si eres capaz con QuickType
  getCharacters(): Observable<any> {    
    return this.http.get<any>(`${this.baseUrl}/character`);
  }
}
