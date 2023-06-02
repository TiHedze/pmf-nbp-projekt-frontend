import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Author } from '../models/author.model';
import { Injectable } from '@angular/core';
import { CreateAuthorRequest } from './requests/create-author-request';

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

  public createAuthor(author: CreateAuthorRequest): Observable<string> {
    return of('');
  }

  public updateAuthor(author: Author) {
    return author;
  }

  public getAuthorsByQuery(query: string): Observable<Author[]> {
    return this.getAuthors();
  }
}
