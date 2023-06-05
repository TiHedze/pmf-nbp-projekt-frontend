import { Injectable } from '@angular/core';
import { Publication } from '../models/author.model';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private readonly httpClient: HttpClient) { }

  public getPublicationsByAuthorId(authorId: string): Observable<Publication[]> {

    const url = `${environment}/publication/${authorId}`;

    return this.httpClient.get<Publication[]>(url).pipe(
      map(item => item),
    )
  }
}
