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
  public series: Serie[] = [];

  constructor(private _marvelService: MarvelService) {}

  ngOnInit(): void {
    this.getSerie('19379');
    this.getSerie('30146');
    this.getSerie('29329');
    console.log(this.series);
  }

  getSerie(id: string) {
    this._marvelService.getSeries(id).subscribe((value: Serie) => {
      this.series.push(value);
    });
  }
}
