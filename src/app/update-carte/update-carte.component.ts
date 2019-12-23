import { Component, OnInit } from '@angular/core';
import {carte} from '../carte';
import { CompteService } from '../services/comptes.service';
import {compte} from '../compte';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-carte',
  templateUrl: './update-carte.component.html',
  styleUrls: ['./update-carte.component.scss']
})
export class UpdateCarteComponent implements OnInit {


  id: number;
 car: carte;
 cartes: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private comService: CompteService ) { }

  ngOnInit() {
    this.car = new carte();

    this.id = this.route.snapshot.params.idCarte;

    this.comService.getCarte(this.id)
      .subscribe(data => {
        console.log(data);
        this.cartes = data;
      }, error => console.log(error));
  }

  updatecarte() {
    this.comService.updatecar(this.id, this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new carte();
    this.gotoList();
  }

  onSubmit() {
    this.updatecarte();
  }

  gotoList() {
    this.router.navigate(['/carte']);
  }


}
