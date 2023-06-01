import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  public authors: string[] = [];
  public dataSource: Author[] = [{firstName: 'Tilen', lastName:'Hedžet', id:'1'}];
  public displayedColumns: string[] = ['position','firstName', 'lastName', 'details'];
  constructor(private authorService: AuthorService) {}
}
