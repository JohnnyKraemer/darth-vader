import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/public/home/home.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComicComponent } from './views/public/comic/comic.component';
import { SerieComponent } from './views/public/serie/serie.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { LoadingModule } from './components/shared/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComicComponent,
    SerieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LoadingModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
