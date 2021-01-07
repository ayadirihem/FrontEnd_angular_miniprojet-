import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Medicament} from '../model/medicament.model';
import {MedicamentService} from '../services/medicament.service'
@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {
  medicaments : Medicament[];

  constructor(private medicamentService: MedicamentService) {

   }
   supprimerMedicament(p: Medicament) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.medicamentService.supprimerMedicament(p.idMedicament).subscribe(() => { 
      console.log("medicament supprimé");
      this.SuprimerMedicamentDuTableau(p);
    });
  }
    }
  SuprimerMedicamentDuTableau(p: Medicament) {
    this.medicaments.forEach((cur, index) => { 
      if(p.idMedicament=== cur.idMedicament) { 
        this.medicaments.splice(index, 1); 
      } 
    });
  }

  ngOnInit(): void {
    this.medicamentService.listeMedicaments().subscribe(
      prods => { 
        console.log(prods); 
        this.medicaments = prods; });
  }

}
