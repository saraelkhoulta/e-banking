import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/carte';
import { CompteService } from '../services/comptes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-carte',
  templateUrl: './update-carte.component.html',
  styleUrls: ['./update-carte.component.scss']
})
export class UpdateCarteComponent implements OnInit {
  id: string;

  cartes: Carte;

  constructor(private route: ActivatedRoute, private router: Router, private comService: CompteService) {}

  ngOnInit() {
    this.cartes = new Carte();

    this.id = this.route.snapshot.params.id;
    this.comService.getCarte(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.cartes = data;
      },
      error => console.log(error)
    );
  }

  updatecarte() {
    this.comService.updatecar(this.id, this.cartes).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.cartes = new Carte();
  }

  onSubmit() {
    this.updatecarte();
  }
}
