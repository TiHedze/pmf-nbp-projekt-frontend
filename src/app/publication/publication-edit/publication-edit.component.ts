import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { PublicationService } from 'src/app/services/publication.service';
import { UpdatePublicationRequest } from 'src/app/services/requests/update-publication.request';
import { PublicationDetails } from 'src/app/services/responses/publication-detail.response';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.css']
})
export class PublicationEditComponent implements OnInit {

  public publication: PublicationDetails = { abstract: '', authors: [], id: '', keywords: '', title: '' };
  public editPublicationFormControl: FormGroup<EditPublicationFormControl> = this.formBuilder.group({
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
    private formBuilder: FormBuilder,
    private publicationService: PublicationService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.publicationService.getPublicationById(id)
      .pipe(
        take(1)
      )
      .subscribe(details => {
        this.publication = details;

        this.editPublicationFormControl.value.abstract = details.abstract;
        this.editPublicationFormControl.value.authorFirstName = details.authors[0].firstName;
        this.editPublicationFormControl.value.authorLastName = details.authors[0].lastName;
        this.editPublicationFormControl.value.coauthor1FirstName = details.authors[1]?.firstName ?? '';
        this.editPublicationFormControl.value.coauthor1LastName = details.authors[1]?.lastName ?? '';
        this.editPublicationFormControl.value.coauthor2FirstName = details.authors[2]?.firstName ?? '';
        this.editPublicationFormControl.value.coauthor2LastName = details.authors[2]?.lastName ?? '';
        this.editPublicationFormControl.value.coauthor3FirstName = details.authors[3]?.firstName ?? '';
        this.editPublicationFormControl.value.coauthor3LastName = details.authors[3]?.lastName ?? '';
        this.editPublicationFormControl.value.coauthor4FirstName = details.authors[4]?.firstName ?? '';
        this.editPublicationFormControl.value.coauthor4LastName = details.authors[4]?.lastName ?? '';
        this.editPublicationFormControl.value.title = details.title;
        this.editPublicationFormControl.value.keywords = details.keywords;
        this.editPublicationFormControl.updateValueAndValidity();
      });
  }

  onSubmit() {
    if (this.editPublicationFormControl.valid) {
      const request: UpdatePublicationRequest = {
        abstract: this.editPublicationFormControl.value.abstract!,
        authors: [
          {
            firstName: this.editPublicationFormControl.value.authorFirstName!,
            lastName: this.editPublicationFormControl.value.authorLastName!
          },
          {
            firstName: this.editPublicationFormControl.value.coauthor1FirstName ?? '',
            lastName: this.editPublicationFormControl.value.coauthor1LastName ?? ''
          },
          {
            firstName: this.editPublicationFormControl.value.coauthor2FirstName ?? '',
            lastName: this.editPublicationFormControl.value.coauthor2LastName ?? ''
          },
          {
            firstName: this.editPublicationFormControl.value.coauthor3FirstName ?? '',
            lastName: this.editPublicationFormControl.value.coauthor3LastName ?? ''
          },
          {
            firstName: this.editPublicationFormControl.value.coauthor4FirstName ?? '',
            lastName: this.editPublicationFormControl.value.coauthor4LastName ?? ''
          }
        ],
        id: this.publication.id,
        keywords: this.editPublicationFormControl.value.keywords!,
        title: this.editPublicationFormControl.value.title!
      };

      this.publicationService.updatePublication(request);
    }
  }
}

interface EditPublicationFormControl {
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