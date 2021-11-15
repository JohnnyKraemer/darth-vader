import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Comic } from 'src/app/core/models/comic.model';
import { Serie } from 'src/app/core/models/serie.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

const FAVORITES_STAR_WARS = ['19379','19242','29291','21131','19486','20659', '73000']
const FAVORITES = ['19379','19242','29329','24396','1067','20615','19242','1058', '16593']
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public series: Serie[] = [];
  public favorites = FAVORITES_STAR_WARS;

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
