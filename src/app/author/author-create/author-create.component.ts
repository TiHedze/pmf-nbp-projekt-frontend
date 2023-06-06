import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent {

  public createAuthorFormControl: FormGroup<CreateAuthorForm> = this.fromBuilder.group({
    firstName: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
  });

  constructor(
    private fromBuilder: FormBuilder,
    private authorService: AuthorService,
    private router: Router) { }

  public onSubmit() {
    if(this.createAuthorFormControl.valid) {
      const {firstName, lastName} = this.createAuthorFormControl.value;
      this.authorService.createAuthor({firstName: firstName!, lastName: lastName!})
      .pipe(
        take(1)
      )
      .subscribe(authorId => {
        this.router.navigate(['author', 'details', authorId]);
      });
    }
  }
}

interface CreateAuthorForm {
  firstName: FormControl<string>,
  lastName: FormControl<string>
}