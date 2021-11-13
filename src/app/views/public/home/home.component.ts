import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Comic } from 'src/app/core/models/comic.model';
import { Serie } from 'src/app/core/models/serie.model';
import { ComicService } from 'src/app/core/services/comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _comicService: ComicService) {}
  
  private idSerie = 30146;
  public serie: Serie = new Serie();
  public comics: Comic[] = [];

  ngOnInit(): void {
    this.getSeries(this.idSerie);
    this.getComics(this.idSerie);
  }

  getSeries(id: number) {
    this._comicService
      .getSeries(id)
      .pipe(take(1))
      .subscribe((value: Serie) => {
        this.serie = value;
        console.log(this.serie);
      });
  }

  getComics(id: number) {
    this._comicService
      .getComicsBySeries(id)
      .pipe(take(1))
      .subscribe((value: Comic[]) => {
        this.comics = value;
        console.log(this.comics);
      });
  }
}
