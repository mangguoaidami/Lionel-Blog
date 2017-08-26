import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
// import { Article } from './article.model';

@Injectable()
export class ArticleService{
    private url: string = 'https://reqres.in/api/users';

    constructor( public http: Http){}

    /**
   * Get all article
   */
    getAllArticle() {
        return this.http.get(this.url)
        .map(res => res.json().data);
    }


    /** 
     * Get a sigle Article
     * */
    getArticleSigle(id: number){    
        return this.http.get(`${this.url}/${id}`)
            .map(res=> res.json().data);
    }
}