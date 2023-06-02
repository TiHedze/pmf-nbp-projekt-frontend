import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author/author.component';
import { SearchComponent } from './search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorCreateComponent } from './author/author-create/author-create.component';
import { AuthorDetailsComponent } from './author/author-details/author-details.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { PublicationCreateComponent } from './publication/publication-create/publication-create.component';
import { PublicationDetailsComponent } from './publication/publication-details/publication-details.component';
import { PublicationEditComponent } from './publication/publication-edit/publication-edit.component';
import { PublicationComponent } from './publication/publication/publication.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    PublicationComponent,
    AuthorDetailsComponent,
    PublicationDetailsComponent,
    SearchComponent,
    AuthorEditComponent,
    PublicationEditComponent,
    AuthorCreateComponent,
    PublicationCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
