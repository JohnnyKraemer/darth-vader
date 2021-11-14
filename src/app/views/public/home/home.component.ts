import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Comic } from 'src/app/core/models/comic.model';
import { Serie } from 'src/app/core/models/serie.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _marvelService: MarvelService) {}
  
  private idSerie = '30146';
  public serie: Serie = new Serie();
  public comics: Comic[] = [];

  ngOnInit(): void {
    this.getSeries(this.idSerie);
    this.getComics(this.idSerie);
  }

  getSeries(id: string) {
    this._marvelService
      .getSeries(id)
      .subscribe((value: Serie) => {
        this.serie = value;
      });
  }

  getComics(id: string) {
    this._marvelService
      .getComicsBySeries(id)
      .subscribe((value: Comic[]) => {
        this.comics = value;
      });
  }
}
