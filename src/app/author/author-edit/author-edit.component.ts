import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  public editAuthorFormControl: FormGroup<EditAuthorFormControl> = this.formBuilder.group({
    firstName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  })

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.authorService.getAuthorById(this.route.snapshot.paramMap.get('id')!)
      .pipe(
        take(1)
      )
      .subscribe(author => {
        this.editAuthorFormControl.value.firstName = author.firstName;
        this.editAuthorFormControl.value.lastName = author.lastName;
        this.editAuthorFormControl.updateValueAndValidity();
      });
  }

  public onSubmit() {
    if (this.editAuthorFormControl.valid) {
      const { firstName, lastName } = this.editAuthorFormControl.value;
      this.authorService.createAuthor({ firstName: firstName!, lastName: lastName! })
        .pipe(
          take(1)
        )
        .subscribe(authorId => {
          this.router.navigate(['author', 'details', authorId]);
        });
    }
  }
}

interface EditAuthorFormControl {
  firstName: FormControl<string>,
  lastName: FormControl<string>
}