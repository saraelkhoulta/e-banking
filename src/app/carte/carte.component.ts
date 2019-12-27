import { Component, OnInit } from '@angular/core';

import { CompteService } from '../services/comptes.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../compte';
import { Carte } from '../carte';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']

})
export class CarteComponent implements OnInit {
  id: string;
  comp: Compte;
  cartes: Carte[];

  constructor(private route: ActivatedRoute, private router: Router, private benService: CompteService) {}

  ngOnInit() {
    this.comp = new Compte();
    

    this.id = this.route.snapshot.params.id;

    this.benService.getCarte(this.id).subscribe(
      (data:any) => {
        console.log(data);
        this.cartes = data;
      },
      error => console.log(error)
    );
  }

  updateCarte(id: string) {
    this.router.navigate(['updateCarte', id]);
  }
}
