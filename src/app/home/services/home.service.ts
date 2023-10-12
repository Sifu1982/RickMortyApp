import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeModule } from '../home.module';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://rickandmortyapi.com/api';

  getCharacters(): Observable<any> {    
    return this.http.get<any>(`${this.baseUrl}/character`);
  }
}
