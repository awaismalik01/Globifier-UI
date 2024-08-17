import { TestBed } from '@angular/core/testing';
import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

import { httpInterceptor } from './http.interceptor';
import { of } from 'rxjs';

describe('httpInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => httpInterceptor(req, next));

  let req: HttpRequest<unknown>;
  let next: HttpHandlerFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    req = {} as HttpRequest<unknown>;
    next = (req: HttpRequest<unknown>) => {
      return of();
    };
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should call httpInterceptor', () => {
    const result = interceptor(req, next);
    expect(result).toBeTruthy();
  });
});
