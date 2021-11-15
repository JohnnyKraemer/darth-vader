import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './views/public/comic/comic.component';
import { AvengersComponent } from './views/public/gallery/avengers/avengers.component';
import { StarWarsComponent } from './views/public/gallery/star-wars/star-wars.component';
import { SerieComponent } from './views/public/serie/serie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/gallery/star-wars',
    pathMatch: 'full',
  },
  { path: 'gallery/star-wars', component: StarWarsComponent },  
  { path: 'gallery/avengers', component: AvengersComponent },  
  { path: 'comic/:id', component: ComicComponent },  
  { path: 'serie/:id', component: SerieComponent },  
];

//Estratégia para carregamento dos componentes
const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: 'legacy',
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
