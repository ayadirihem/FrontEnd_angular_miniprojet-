import { Component, OnInit } from '@angular/core';
import {Medicament} from '../model/medicament.model';
import {MedicamentService} from '../services/medicament.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styles: [
  ]
})
export class UpdateMedicamentComponent implements OnInit {
  currentMedicament = new Medicament();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router, 
    private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.medicamentService.consulterMedicament(this.activatedRoute.snapshot.params.id)
                          . subscribe( prod =>{ this.currentMedicament = prod; } ) ;
  }
  updateMedicament() { 
    this.medicamentService.updateMedicament(this.currentMedicament)
                          .subscribe(prod => { 
                            this.router.navigate(['medicaments']); },(error) => { 
                              alert("Problème lors de la modification !"); 
                            } 
                            );
    }

}
