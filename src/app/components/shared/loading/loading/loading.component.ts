import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  public loading: boolean = false;

  constructor(private _loadingService: LoadingService) {}

  ngOnInit(): void {
    this._loadingService.loading$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        if (value !== null) {
          if (value) {
            this.loading = value;
          } else {
            setTimeout(() => {
              this.loading = value;
            }, 1000);
          }
        }
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
