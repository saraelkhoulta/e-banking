import { Component, OnInit } from '@angular/core';
import {operation} from '../operation';
import { CompteService } from '../services/comptes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { abonne } from '../abonne';



@Component({
  selector: 'app-releve',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.scss']
})
export class ReleveComponent implements OnInit {

  id: number;
  ab: abonne;
  op: any;

   constructor(private route: ActivatedRoute, private router: Router,
               private benService: CompteService) { }

   ngOnInit() {
     this.ab = new abonne();

     this.id = this.route.snapshot.params.id;

     this.benService.getoper(this.id)
       .subscribe(data => {
         console.log(data);
         this.op = data;
       }, error => console.log(error));
   }

}
