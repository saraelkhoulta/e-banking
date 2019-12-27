import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/comptes.service';
import { Abonne } from '../abonne';
import { Compte } from '../compte';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listes-comptes',
  templateUrl: './listes-comptes.component.html',
  styleUrls: ['./listes-comptes.component.scss']
})
export class ListesComptesComponent implements OnInit {
  ab: Abonne;
   comptes:Compte[];
  id: string;

  constructor(private route: ActivatedRoute, private compService: CompteService, private router: Router) {}

  ngOnInit() {
    this.ab = new Abonne();
    //this.id = this.ab.idAbonne;
    this.id="ab";
    
    
    this.compService.getComptes(this.id).subscribe(
      (data:any) => {
        console.log(data);
        this.comptes = data;
      },
      error => console.log(error)
    );
  }

  releveComp(id: string) {
    this.router.navigate(['releve', id]);
  }

  affCarte(id: string) {
    this.router.navigate(['carte', id]);
  }
}
