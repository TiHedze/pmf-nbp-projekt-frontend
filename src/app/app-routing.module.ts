import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { PublicationComponent } from './publication/publication.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'authors', component: AuthorComponent},
  {path: 'publications', component: PublicationComponent},
  {path:'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
