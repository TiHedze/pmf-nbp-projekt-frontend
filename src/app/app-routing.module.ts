import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  {path:'authors', component: AuthorComponent},
  {path: 'publications', component: PublicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
