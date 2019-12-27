import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/comptes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Compte } from '../compte';
import { Operation } from '../Operation';

@Component({
  selector: 'app-releve',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.scss']
})
export class ReleveComponent implements OnInit {
  id: string;
  ab: Compte;
  op: Operation;

  constructor(private route: ActivatedRoute, private router: Router, private benService: CompteService) {}

  ngOnInit() {
    this.ab = new Compte();
    this.id = this.route.snapshot.params['id'];
    this.op = new Operation();

    this.benService.getoper(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.op = data;
      },
      error => console.log(error)
    );
  }
}
