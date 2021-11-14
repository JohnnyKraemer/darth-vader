import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Comic } from 'src/app/core/models/comic.model';
import { Serie } from 'src/app/core/models/serie.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

const FAVORITES = ['19379','30146','29329','24396','1067','20615','19242','1058', '16593']
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public series: Serie[] = [];
  public favorites = FAVORITES;

  constructor(private _marvelService: MarvelService) {}

  ngOnInit(): void {
    this.favorites.forEach(element => {
      this.getSerie(element);
    });
  }

  getSerie(id: string) {
    this._marvelService.getSeries(id).subscribe((value: Serie) => {
      this.series.push(value);
    });
  }
}
