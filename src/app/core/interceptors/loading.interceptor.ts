import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/components/shared/loading/loading.service';
import { environment } from 'src/environments/environment';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf(environment.apiUrl) !== -1) {
      this._loadingService.activate();
    }

    return next.handle(request).pipe(finalize(() => {
      if (request.url.indexOf(environment.apiUrl) !== -1) {
        this._loadingService.deactivate();
      }
    })) as Observable<HttpEvent<any>>;
  }
}
