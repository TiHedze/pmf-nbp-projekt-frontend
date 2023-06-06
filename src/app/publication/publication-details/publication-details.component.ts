import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Publication } from 'src/app/models/author.model';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {
  public publication: Publication = { abstract: '', authors: [], id: '', keywords: '', title: '' };
  public displayedColumns: string[] = ['position', 'firstName', 'lastName'];

  constructor(
    private publicationService: PublicationService,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.publicationService
      .getPublicationById(id)
      .pipe(
        take(1)
      )
      .subscribe(details => {
        this.publication = details;
      });
  }

  public deletePublication() {
    this.publicationService.deletePublication(this.publication.id);
    this.router.navigate(['/publications']);
  }
}
