import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Author, Publication } from "src/app/models/author.model";
import { AuthorService } from "src/app/services/author.service";
import { PublicationService } from "src/app/services/publication.service";
import { AuthorDetails } from "src/app/services/responses/author-detail.response";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {

  public author: Author = {firstName: '', lastName: '', id: ''};
  public relatedAuthors: Author[] = [];
  public publications: Publication[] = [];
  public displayedPublicationColumns: string[] = ['title', 'details'];
  public displayedAuthorColumns: string[] = ['firstName', 'lastName', 'details'];

  private unsubscriber: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.authorService
      .getAuthorById(id)
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(authorDetails => {
        this.author = authorDetails.author;
        this.publications = authorDetails.publications;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(false);
    this.unsubscriber.complete();
  }

  public deleteAuthor() {
    this.authorService.deleteAuthor(this.author.id);
    this.router.navigate(['/authors']);
  }
}
