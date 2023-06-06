import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public searchControl: FormGroup<SearchForm> = this.formBuilder.group({
    query: new FormControl<string>('',{nonNullable: true,validators:[Validators.required]}),
    category: new FormControl<string>(Dropdown.Author, {nonNullable: true, validators: [Validators.required]})
  });

  public selected: string = Dropdown.Author;
  public author: Dropdown = Dropdown.Author;
  public publication: Dropdown = Dropdown.Publication;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) 
    { }

  public onSubmit() {
    if(this.searchControl.valid)
    {
      console.log(this.searchControl.value.query);
      this.router.navigate([this.searchControl.value.category],{queryParams: {query: this.searchControl.value.query}});
    }
  }
  
}

interface SearchForm {
  query: FormControl<string>;
  category: FormControl<string>
}

enum Dropdown {
  Author = 'authors',
  Publication = 'publications'
}
