import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComicComponent } from './views/public/comic/comic.component';
import { SerieComponent } from './views/public/serie/serie.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { LoadingModule } from './components/shared/loading/loading.module';
import { StarWarsComponent } from './views/public/gallery/star-wars/star-wars.component';
import { AvengersComponent } from './views/public/gallery/avengers/avengers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComicComponent,
    SerieComponent,
    StarWarsComponent,
    AvengersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LoadingModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
