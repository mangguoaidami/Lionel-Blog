import { Component, OnInit } from '@angular/core';

// import { Article } from './../../theme/services/articleService/article.model';
import { ArticleService } from './../../theme/services/articleService/article.service';

@Component({
    selector: 'list-app',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    public articles;

    constructor(private service: ArticleService){}

    ngOnInit(){
        this.service.getAllArticle()
            .subscribe(data => {
                this.articles = data;
            });
    };
}