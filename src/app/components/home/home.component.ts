import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  backgroundUrl: any;
  constructor() {}

  ngOnInit(): void {}
}
