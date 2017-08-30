import { Component, OnInit } from '@angular/core';

import { ArticleService } from './../../theme/services/articleService/article.service';

@Component({
    templateUrl: './article-rxjs.component.html',
    styleUrls: ['./article-rxjs.component.scss']
})

export class ArticleRxjsComponent implements OnInit{
    public articles: any[];

    constructor(private articleservice: ArticleService){}

    ngOnInit(){
        this.articleservice.getAllRxjsArticle()
            .subscribe(data => {
                this.articles = data;
            })
    }
}