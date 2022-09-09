import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from './services/api-products.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sayna-baman-app';
  imageUrl: any = '';

  currentRoute!: NavigationStart;
  constructor(private api: ApiProductsService, private router: Router) {
    router.events.subscribe((res) => {
      this.currentRoute = res as NavigationStart;
      console.log(this.currentRoute.url);
      if (this.currentRoute.url == '/home') {
        this.api.getImageFontById(1).subscribe((res) => {
          this.imageUrl = res.imageUrl;
        });
      }
      if (this.currentRoute.url == '/game') {
        this.api.getImageFontById(2).subscribe((res) => {
          this.imageUrl = res.imageUrl;
        });
      }
      if (this.currentRoute.url == '/eshop') {
        this.api.getImageFontById(3).subscribe((res) => {
          this.imageUrl = res.imageUrl;
        });
      }
      if (this.currentRoute.url == '/monCompt') {
        this.api.getImageFontById(4).subscribe((res) => {
          this.imageUrl = res.imageUrl;
        });
      }
    });
  }

  ngOnInit(): void {}
}
