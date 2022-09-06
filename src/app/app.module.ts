import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonComptComponent } from './components/mon-compt/mon-compt.component';
import { NavDroitComponent } from './components/nav-droit/nav-droit.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartesComponent } from './components/cartes/cartes.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    EshopComponent,
    MonComptComponent,
    NavDroitComponent,
    NotFoundPageComponent,
    CartesComponent,
    AsideComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
