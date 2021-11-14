import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/core/models/comic.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  public comic: Comic = new Comic();
  public idSerie: string = '';

  constructor(
    private _marvelService: MarvelService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');

    if (id) {
      this.getComic(id);
    } else {
      this._router.navigate(['/']);
    }
  }

  getComic(id: string) {
    this._marvelService.getComic(id).subscribe((value: Comic) => {
      this.comic = value;
      this.idSerie = value.series.resourceURI.split('/')[value.series.resourceURI.split('/').length-1];
      console.log(this.comic);
      console.log(this.idSerie);
    });
  }
}
