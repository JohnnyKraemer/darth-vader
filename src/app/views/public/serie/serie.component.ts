import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/core/models/comic.model';
import { Serie } from 'src/app/core/models/serie.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {
  public serie: Serie = new Serie();
  public comics: Comic[] = [];

  constructor(
    private _marvelService: MarvelService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');

    if (id) {
      this.getSeries(id);
      this.getComics(id);
    } else {
      this._router.navigate(['/']);
    }
  }

  getSeries(id: string) {
    this._marvelService.getSeries(id).subscribe((value: Serie) => {
      this.serie = value;
    });
  }

  getComics(id: string) {
    this._marvelService.getComicsBySeries(id).subscribe((value: Comic[]) => {
      this.comics = value;
    });
  }
}
