import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AuthorCreateComponent } from './author/author-create/author-create.component';
import { AuthorDetailsComponent } from './author/author-details/author-details.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorComponent } from './author/author/author.component';
import { PublicationCreateComponent } from './publication/publication-create/publication-create.component';
import { PublicationDetailsComponent } from './publication/publication-details/publication-details.component';
import { PublicationEditComponent } from './publication/publication-edit/publication-edit.component';
import { PublicationComponent } from './publication/publication/publication.component';

const routes: Routes = [
  { path: 'authors', component: AuthorComponent },
  { path: 'authors/create', component: AuthorCreateComponent },
  { path: 'authors/edit/:id', component: AuthorEditComponent },
  { path: 'authors/details/:id', component: AuthorDetailsComponent },
  { path: 'publications', component: PublicationComponent },
  { path: 'publications/create', component: PublicationCreateComponent },
  { path: 'publications/edit/:id', component: PublicationEditComponent },
  { path: 'publications/details/:id', component: PublicationDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
