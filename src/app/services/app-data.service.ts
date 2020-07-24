import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AgentModel } from '../models/agent-model';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(
    private http: HttpClient
  ) { }
  
  public loadAgent(idAgent: number): Observable<AgentModel> {
    const apiCalled = "agents";
    
    const myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders.set('Content-Type', 'application/json');

    return this.http.get<AgentModel>(`${environment.apiUrl}${apiCalled}/${idAgent}`, { headers: myHeaders })
      .pipe(map((data: AgentModel) => data));
  }

}
