import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/core/models/serie.model';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { FAVORITES } from 'src/app/core/data/avengers.data';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.scss']
})
export class AvengersComponent implements OnInit {

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
