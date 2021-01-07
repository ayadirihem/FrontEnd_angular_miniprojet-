import { Injectable } from '@angular/core';
import {Medicament} from '../model/medicament.model'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  apiURL: string = 'http://localhost:8080/medicaments/api';

  medicaments : Medicament[];
  medicament : Medicament;

  constructor(private http : HttpClient) {
    
  }
   listeMedicaments():Observable<Medicament[]> {
    return this.http.get<Medicament[]>(this.apiURL);
   }
   ajouterMedicament( prod: Medicament):Observable<Medicament>{ 
    return this.http.post<Medicament>(this.apiURL, prod, httpOptions);
    }
   supprimerMedicament(id : number){ 
    const url = `${this.apiURL}/${id}`; 
    return this.http.delete(url, httpOptions);
    }
    consulterMedicament(id:number): Observable<Medicament>{ 
      const url = `${this.apiURL}/${id}`; 
      return this.http.get<Medicament>(url);
          }
    trierProduits(){ 
            this.medicaments = this.medicaments.sort((n1,n2) => { 
              if (n1.idMedicament > n2.idMedicament) 
              { return 1; } 
              if (n1.idMedicament < n2.idMedicament) 
              { return -1; } 
              return 0; 
            }); 
          }
     updateMedicament(p:Medicament) : Observable<Medicament> { 
      return this.http.put<Medicament>(this.apiURL, p, httpOptions);
      }
}
