import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor() {}

  set loading(value: boolean) {
    this._loading.next(value);
  }

  get loading$(): Observable<boolean> {
    return this._loading.asObservable();
  }

  public activate(){
    this.loading = true;
  }

  public deactivate(){
    this.loading = false;
  }
}
