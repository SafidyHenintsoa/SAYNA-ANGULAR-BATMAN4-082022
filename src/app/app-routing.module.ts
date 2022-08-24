import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopComponent } from './components/eshop/eshop.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { MonComptComponent } from './components/mon-compt/mon-compt.component';
import { NavDroitComponent } from './components/nav-droit/nav-droit.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'navDroit', component: NavDroitComponent },
  { path: 'game', component: GameComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'monCompt', component: MonComptComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
