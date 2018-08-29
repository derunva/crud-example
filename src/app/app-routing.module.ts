import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CreateUpdateArticleComponent } from './create-update-article/create-update-article.component';
const routes: Routes = [
  {
    path : '',
    component: ArticlesListComponent
  },
  {
    path: 'new',
    component : CreateUpdateArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
