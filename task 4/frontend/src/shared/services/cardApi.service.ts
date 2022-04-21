import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICardApiService} from "../interfaces/ICardApiService";
import {Card} from "../models/Card";

const host = ' http://localhost:3000';

@Injectable()
export class CardApiService implements ICardApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(card: Card): Observable<void> {
    return this.httpClient.post<void>(host, card);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  edit(card: Card): Observable<void> {
    return this.httpClient.put<void>(host, card);
  }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(host);
  }
}
