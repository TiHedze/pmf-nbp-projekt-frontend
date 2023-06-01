import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { PublicationComponent } from './publication/publication.component';
import { SearchComponent } from './search/search.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';

const routes: Routes = [
  {path:'authors', component: AuthorComponent},
  {path: 'publications', component: PublicationComponent, children: [
    {
      path: ':id',
    component:PublicationDetailsComponent
    }
  ]},
  {path:'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
