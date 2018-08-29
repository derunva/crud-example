import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ArticlesService } from './articles.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateArticleComponent } from './create-update-article/create-update-article.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    CreateUpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
