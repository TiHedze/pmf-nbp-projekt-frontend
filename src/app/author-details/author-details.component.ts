import { Component, OnDestroy, OnInit } from "@angular/core";
import { Author, Publication } from "../models/author.model";
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AuthorService } from "../services/author.service";
import { PublicationService } from "../services/publication.service";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {
  public author?: Author;
  public publications: Publication[] = [];
  public displayedColumns: string[] = ['title', 'details']

  private unsubscriber: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private publicationService: PublicationService) { }
  
   

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.authorService
      .getAuthorById(id)
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(author => {
        this.author = author;
      });

      this.publicationService
        .getPublicationsByAuthorId(id)
        .pipe(
          takeUntil(this.unsubscriber)
        )
        .subscribe(publications => {
          this.publications = publications;
        });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(false);
    this.unsubscriber.complete();
  }
}
