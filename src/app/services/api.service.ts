import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkPosition } from './../interfaces/work-position';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URI : string;

  constructor(private _http : HttpClient) { 
    this.API_URI = 'https://ibillboard.com/api/';
  }

  getWorkPosition(model: string): Observable<WorkPosition[]> {
    return this._http.get<WorkPosition[]>(`${this.API_URI}` + model);
  }
}

