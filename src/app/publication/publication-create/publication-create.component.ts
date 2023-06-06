import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { PublicationService } from 'src/app/services/publication.service';
import { CreatePublicationRequest } from 'src/app/services/requests/create-publication.request';

@Component({
  selector: 'app-publication-create',
  templateUrl: './publication-create.component.html',
  styleUrls: ['./publication-create.component.css']
})
export class PublicationCreateComponent {

  public createPublicationFormControl: FormGroup<CreatePublicationFormControl> = this.formBuilder.group({
    abstract: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    authorFirstName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    authorLastName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    coauthor1FirstName: new FormControl<string>('', { nonNullable: false }),
    coauthor1LastName: new FormControl<string>('', { nonNullable: false }),
    coauthor2FirstName: new FormControl<string>('', { nonNullable: false }),
    coauthor2LastName: new FormControl<string>('', { nonNullable: false }),
    coauthor3FirstName: new FormControl<string>('', { nonNullable: false }),
    coauthor3LastName: new FormControl<string>('', { nonNullable: false }),
    coauthor4FirstName: new FormControl<string>('', { nonNullable: false }),
    coauthor4LastName: new FormControl<string>('', { nonNullable: false }),
    keywords: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  constructor(
    private publicationService: PublicationService,
    private formBuilder: FormBuilder) { }
  
    onSubmit() {
      if (this.createPublicationFormControl.valid) {
        const request: CreatePublicationRequest = {
          abstract: this.createPublicationFormControl.value.abstract!,
          authors: [
            {
              firstName: this.createPublicationFormControl.value.authorFirstName!,
              lastName: this.createPublicationFormControl.value.authorLastName!
            },
            {
              firstName: this.createPublicationFormControl.value.coauthor1FirstName ?? '',
              lastName: this.createPublicationFormControl.value.coauthor1LastName ?? ''
            },
            {
              firstName: this.createPublicationFormControl.value.coauthor2FirstName ?? '',
              lastName: this.createPublicationFormControl.value.coauthor2LastName ?? ''
            },
            {
              firstName: this.createPublicationFormControl.value.coauthor3FirstName ?? '',
              lastName: this.createPublicationFormControl.value.coauthor3LastName ?? ''
            },
            {
              firstName: this.createPublicationFormControl.value.coauthor4FirstName ?? '',
              lastName: this.createPublicationFormControl.value.coauthor4LastName ?? ''
            }
          ],
          keywords: this.createPublicationFormControl.value.keywords!,
          title: this.createPublicationFormControl.value.title!
        };
  
        this.publicationService.createPublication(request).pipe(take(1)).subscribe();
      }
  }

}

interface CreatePublicationFormControl {
  title: FormControl<string>,
  abstract: FormControl<string>,
  keywords: FormControl<string>,
  authorFirstName: FormControl<string>,
  authorLastName: FormControl<string>,
  coauthor1FirstName: FormControl<string | null>,
  coauthor1LastName: FormControl<string | null>,
  coauthor2FirstName: FormControl<string | null>,
  coauthor2LastName: FormControl<string | null>,
  coauthor3FirstName: FormControl<string | null>,
  coauthor3LastName: FormControl<string | null>,
  coauthor4FirstName: FormControl<string | null>,
  coauthor4LastName: FormControl<string | null>,
}