import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  public getAuthorById(id: string): Observable<Author> {
    return of({firstName: 'Tilen', lastName: 'Tilen', id: '2'});
  }

  public getAuthors(): Observable<Author[]> {
    return of([{firstName: 'Tilen', lastName: 'Tilen', id: '2'}]);
  }

  public create(author: Author) {
    return author;
  }
}
