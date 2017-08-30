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
        // return this.http.get(this.url)
        return this.http.get('./../../../../assets/mocks/article.response.json')
            .map(res => res.json().data);
    }


    /** 
     * Get a sigle Article
     * */
    getArticleSigle(id: number){    
        // return this.http.get(`${this.url}/${id}`)
        //     .map(res=> res.json().data);
        return this.http.get('./../../../../assets/mocks/article.response.json')
            .map(res => res.json().data[id]);
    }

    /**
     * Get Angular article list
     */
    getAllAngularArticle(){
        return this.http.get('./../../../../assets/mocks/article-angular.response.json')
            .map(res => res.json().data)
    }

    /**
     * Get Angular sigle article detiel
     */
    getAngularSigle(id: number){
        return this.http.get('./../../../../assets/mocks/article-angular.response.json')
            .map(res => res.json().data[id])
    }

     /**
     * Get Rxjs article list
     */
    getAllRxjsArticle(){
        return this.http.get('./../../../../assets/mocks/article-rxjs.response.json')
            .map(res => res.json().data)
    }

    /**
     * Get Rxjs sigle article detiel
     */
    getRxjsSigle(id: number){
        return this.http.get('./../../../../assets/mocks/article-rxjs.response.json')
            .map(res => res.json().data[id])
    }
}