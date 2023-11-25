import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../Store/Model/Associate.model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  baseUrl = "http://localhost:3000/associate"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Associates>(this.baseUrl);
  }

  getByCode(code:number){
    return this.http.get<Associates>(this.baseUrl+'/'+code);
  }

  delete(code:number){
    return this.http.delete(this.baseUrl+'/'+code);
  }

  update(data:Associates){
    return this.http.put(this.baseUrl+'/'+data.id,data);
  }

  create(data:Associates){
    return this.http.post(this.baseUrl,data);
  }
}
