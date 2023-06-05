import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Author } from '../models/author.model';
import { Injectable } from '@angular/core';
import { CreateAuthorRequest } from './requests/create-author-request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  public getAuthorById(id: string): Observable<Author> {

    const url = `${environment}/author/${id}`;

    return this.httpClient.get<Author>(url).pipe(
      map(item => item),
    )
  }

  public getAuthors(): Observable<Author[]> {

    const url = `${environment}/author`;

    return this.httpClient.get<Author[]>(url).pipe(
      map(items => items)
    )
  }

  public createAuthor(author: CreateAuthorRequest): Observable<string> {
    const url = `${environment}/author`;

    return this.httpClient.post<string>(url, author).pipe(
      map(result => result),
    );
  }

  public updateAuthor(author: Author) {
    const url = `${environment}/author`;

    return this.httpClient.put<Author>(url, author).pipe(
      map(result => result),
    );
  }

  public getAuthorsByQuery(query: string): Observable<Author[]> {
    const url = `${environment}/author?query=${query}`;

    return this.httpClient.get<Author[]>(url).pipe(
      map(items => items)
    )
  }
}
