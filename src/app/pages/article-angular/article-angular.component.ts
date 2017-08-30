import { Component, OnInit } from '@angular/core';

import { ArticleService } from './../../theme/services/articleService/article.service';

@Component({
    templateUrl: './article-angular.component.html',
    styleUrls: ['./article-angular.component.scss']
})

export class ArticleAngularComponent implements OnInit{
    public articles: any[];

    constructor(private articleservice: ArticleService){}

    ngOnInit(){
        //getAllAngularArticle
        this.articleservice.getAllAngularArticle()
            .subscribe(data => this.articles = data);
    }
}