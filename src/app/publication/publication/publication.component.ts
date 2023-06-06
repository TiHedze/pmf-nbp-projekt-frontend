import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Publication } from 'src/app/models/author.model';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  dataSource: Publication[] = [];
  displayedColumns: string[] = ['title', 'details'];
  private unsubscriber: Subject<boolean> = new Subject();

  constructor(
    private publicationService: PublicationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.has('query')) {
      const query = this.route.snapshot.queryParamMap.get('query')!;
      this.publicationService.getPublicationsByQuery(query)
        .pipe(
          takeUntil(this.unsubscriber)
        )
        .subscribe(publications => {
          this.dataSource = publications;
        });
      return;
    }
    this.publicationService.getPublications()
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(publications => {
        this.dataSource = publications;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(false);
    this.unsubscriber.complete();
  }

}
