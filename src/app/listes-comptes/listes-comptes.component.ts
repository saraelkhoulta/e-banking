import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/comptes.service';
import {abonne} from '../abonne';
import {compte} from '../compte';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listes-comptes',
  templateUrl: './listes-comptes.component.html',
  styleUrls: ['./listes-comptes.component.scss']
})
export class ListesComptesComponent implements OnInit {
  ab: abonne;
  public comptes;
  id: number;

  constructor(private route: ActivatedRoute, private compService: CompteService, private router: Router) {}

  ngOnInit() {
     this.ab = new abonne();
     this.id = this.route.snapshot.params.id;

     this.compService.getComptes(this.id)
      .subscribe(data => {
        console.log(data);
        this.comptes = data;
      }, error => console.log(error));
  }





  releveComp(id: number) {
    this.router.navigate(['/releve', id]);
  }

  affCarte(id: number) {
    this.router.navigate(['/carte', id]);
  }

}
