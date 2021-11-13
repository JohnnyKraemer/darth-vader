import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Comic } from '../models/comic.model';
import { Serie } from '../models/serie.model';

const baseUrl = `${environment.apiUrl}`;
const hash = `${environment.hash}`;

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private _httpClient: HttpClient) {}

  // set usuario(value: Usuario | null) {
  //   localStorage.removeItem('usuario');
  //   this._usuario.next(value);

  //   if (value != null) {
  //     localStorage.setItem('usuario', JSON.stringify(value));
  //   }
  // }

  // get usuario$(): Observable<Usuario> {
  //   return this._usuario.asObservable();
  // }

  getSeries(id: number): Observable<Serie> {
    return this._httpClient.get<any>(`${baseUrl}/series${hash}&id=${id}`).pipe(
      switchMap((value: any) => {
        return of(value.data.results[0]);
      })
    );
  }

  getComicsBySeries(idSerie: number, noVariants: boolean = true, orderBy:string = 'onsaleDate'): Observable<Comic[]> {
    return this._httpClient.get<any>(
      `${baseUrl}/comics${hash}&series=${idSerie}&noVariants=${noVariants}&orderBy=${orderBy}`
    ).pipe(
      switchMap((value: any) => {
        return of(value.data.results);
      })
    );
  }
}
