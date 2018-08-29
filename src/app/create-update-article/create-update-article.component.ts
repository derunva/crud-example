import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
@Component({
  selector: 'app-create-update-article',
  templateUrl: './create-update-article.component.html',
  styleUrls: ['./create-update-article.component.scss']
})
export class CreateUpdateArticleComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }
  article:any = {
    title: '',
    body: ''
  }
  submit(){
    console.log(this.article)
    this.articleService.createArticle(this.article).subscribe(data => console.log(data))
  }
  ngOnInit() {
  }

}
