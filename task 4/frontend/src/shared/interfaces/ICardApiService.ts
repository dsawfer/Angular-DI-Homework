import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import {Card} from "../models/Card";

export const ICardApiServiceToken = new InjectionToken('ICardApiService');

export interface ICardApiService {
  getAll(): Observable<Card[]>;

  add(purchase: Card): Observable<void>;

  delete(id: string): Observable<void>;

  edit(purchase: Card): Observable<void>;
}
