import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carts: any;

  constructor(private api: CarteService) {}

  ngOnInit(): void {
    this.api.getCartes().subscribe((res) => {
      this.carts = res;
    });
  }
}
