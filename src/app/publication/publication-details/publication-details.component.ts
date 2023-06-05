import { Component } from '@angular/core';
import { Publication } from 'src/app/models/author.model';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent {
  public publication?: Publication;
  public displayedColumns: string[] = ['position','firstName', 'lastName'];
}
