import { Injectable } from '@angular/core';
import { Publication } from '../models/author.model';
import { Observable, map, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreatePublicationRequest } from './requests/create-publication.request';
import { UpdatePublicationRequest } from './requests/update-publication.request';
import { PublicationDetails } from './responses/publication-detail.response';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private readonly httpClient: HttpClient) { }

  public getPublicationsByQuery(query: string): Observable<Publication[]> {
    const url = `${environment.api}/publication`;
    return this.httpClient.get<Publication[]>(url, {params: {filter: query}})
    .pipe(
      map(item => item)
    )
  }

  public getPublications(): Observable<Publication[]> {
    const url = `${environment.api}/publication`;

    return this.httpClient.get<Publication[]>(url)
    .pipe(
      map(item => item)
    )
  }

  public createPublication(request: CreatePublicationRequest): Observable<string> {
    const url = `${environment.api}/publication`;

    const authors = request.authors.filter(author => author.firstName !== '' && author.lastName !== '');
    request.authors = authors;
    
    return this.httpClient.post<string>(url, request)
    .pipe(
      map(id => id)
    );
  }

  public updatePublication(request: UpdatePublicationRequest): Observable<string> {
    const url = `${environment.api}/publication`;

    const authors = request.authors.filter(author => author.firstName !== '' && author.lastName !== '');
    request.authors = authors;

    return this.httpClient.put<string>(url, request)
    .pipe(
      map(id => id)
    );
  }

  public deletePublication(id: string) {
    const url = `${environment.api}/publication/${id}`;
    this.httpClient.delete(url).pipe(take(1)).subscribe();
  }

  public getPublicationById(id: string): Observable<PublicationDetails> {
    const url = `${environment.api}/publication/${id}`;

    return this.httpClient.get<PublicationDetails>(url).pipe(
      map(res => res)
    );
  }
}
