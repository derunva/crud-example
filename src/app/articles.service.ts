import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesUrl = 'http://localhost:3000/articles.json';
  constructor(private _http: HttpClient) { }
  getArticles(){
    return this._http.get(this.articlesUrl)
  }
  createArticle(data){
    return this._http.post(this.articlesUrl, data)
  }
}
