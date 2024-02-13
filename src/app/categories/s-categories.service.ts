import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Scategorie } from './scategorie';



@Injectable({
  providedIn: 'root'
})
export class SCategoriesService {



  private apiUrl="http://localhost:3001/api/scategories/"
  constructor(private http: HttpClient) { }
  


  getAllSCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  createSCategorie(scat: Scategorie) {
    return this.http.post(this.apiUrl , scat);
  }


  updateCategorie(id: any, scat: Scategorie) {
    return this.http.put(this.apiUrl +id,scat)
  }


  deleteSCategorie(id: any) {
    return this.http.delete(this.apiUrl + id);
  }


  getSCategorieById(id: any) {
    return this.http.get(this.apiUrl + id)
  }


}
