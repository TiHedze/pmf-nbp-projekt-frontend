import { Injectable } from '@angular/core';
import { Publication } from '../models/author.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor() { }

  public getPublicationsByAuthorId(authorId: string): Observable<Publication[]> {
    return of([{abstract: '', id: '', title:'test title', keywords: 'test1, test2, test3', authors: []}])
  }
}
