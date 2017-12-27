import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

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
}