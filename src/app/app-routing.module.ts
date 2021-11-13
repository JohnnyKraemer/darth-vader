import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/admin',
  //   pathMatch: 'full',
  // },
  { path: '', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
