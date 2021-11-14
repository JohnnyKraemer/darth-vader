import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './views/public/comic/comic.component';
import { HomeComponent } from './views/public/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/admin',
  //   pathMatch: 'full',
  // },
  { path: '', component: HomeComponent },  
  { path: 'comic/:id', component: ComicComponent },  
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
