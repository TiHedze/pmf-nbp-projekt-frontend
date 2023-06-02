import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { PublicationService } from '../services/publication.service';
import { Observable } from 'rxjs';
import { Author, Publication } from '../models/author.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchControl: FormGroup<SearchForm> = this.formBuilder.group({
    query: new FormControl<string>('',{nonNullable: true,validators:[Validators.required]}),
    category: new FormControl<string>(Dropdown.Author, {nonNullable: true, validators: [Validators.required]})
  });

  public selected: string = Dropdown.Author;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) 
    { }

  public onSubmit() {
    if(this.searchControl.valid)
    {
      this.router.navigate([this.searchControl.value.category, this.searchControl.value.query]);
    }
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

interface SearchForm {
  query: FormControl<string>;
  category: FormControl<string>
}

enum Dropdown {
  Author = 'author',
  Publication = 'publication'
}
