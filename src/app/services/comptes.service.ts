import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:8080/comptes';
  private baseUrl1 = 'http://localhost:8080/operation';
  private baseUrl2 = 'http://localhost:8080/carte';

  constructor(private HttpClient: HttpClient) { }

  public getComptes(id: number) {
      return this.HttpClient.get(`${this.baseUrl}/${id}`);
    }

    public updatecar(id: number, value: any): Observable<Object> {

        return this.HttpClient.put(`${this.baseUrl}/${id}`, value);
      }




  public getoper(id: number) {
    return this.HttpClient.get(`${this.baseUrl1}/${id}`);
  }


  public getCarte(id: number) {
    return this.HttpClient.get(`${this.baseUrl2}/${id}`);
  }

}
