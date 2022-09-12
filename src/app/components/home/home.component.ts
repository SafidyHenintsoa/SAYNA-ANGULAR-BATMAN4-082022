import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carts: any;
  carteAuCinema: any;
  carteAUCinema: any[] = [];
  carteMemesis: any[] = [];
  carteAllie: any[] = [];
  constructor(private api: CarteService) {}

  ngOnInit(): void {
    this.api.getCartes().subscribe((res) => {
      this.carts = res;
    });
    for (let i = 1; i < 4; i++) {
      this.api.getCarteById(i).subscribe((res) => {
        this.carteAUCinema.push(res);
      });
    }
    for (let i = 4; i < 7; i++) {
      this.api.getCarteById(i).subscribe((res) => {
        this.carteMemesis.push(res);
      });
    }
    for (let i = 7; i < 10; i++) {
      this.api.getCarteById(i).subscribe((res) => {
        this.carteAllie.push(res);
      });
    }
  }
}
