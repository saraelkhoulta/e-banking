import { Component, OnInit } from '@angular/core';

import { CompteService } from '../services/comptes.service';
import {compte} from '../compte';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  id: number;
  comp: compte;
  op: any;

   constructor(private route: ActivatedRoute, private router: Router,
               private benService: CompteService) { }

   ngOnInit() {
     this.comp = new compte();


     this.id = this.route.snapshot.params.id;

     this.benService.getCarte(this.id)
       .subscribe(data => {
         console.log(data);
         this.op = data;
       }, error => console.log(error));
   }

   updateCarte(id: number) {

    this.router.navigate(['/updateCarte', id]);

   }
}
