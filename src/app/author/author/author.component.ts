import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, OnDestroy {

  public authors: Author[] = [];
  public displayedColumns: string[] = ['position', 'firstName', 'lastName', 'details'];
  private unsubscriber: Subject<boolean> = new Subject();

  constructor(private authorService: AuthorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.has('query')) {
      const query = this.route.snapshot.queryParamMap.get('query')!;
      this.authorService.getAuthorsByQuery(query)
        .pipe(
          takeUntil(this.unsubscriber)
        )
        .subscribe(authors => {
          this.authors = authors;
        });
      return;
    }
    this.authorService.getAuthors()
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(authors => {
        this.authors = authors;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(false);
    this.unsubscriber.complete();
  }
}
