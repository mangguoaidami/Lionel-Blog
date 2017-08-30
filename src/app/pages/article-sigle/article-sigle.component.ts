import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../../theme/services/articleService/article.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
// import { Article } from './../../theme/services/articleService/article.model';

@Component({
    templateUrl: './article-sigle.component.html',
    styleUrls: ['./article-sigle.component.scss']
})

export class ArticleSigleComponent implements OnInit{
    public article;
    
    constructor(private route: ActivatedRoute, private service: ArticleService){}

    ngOnInit(){

        let id = this.route.snapshot.params['id'];

        this.service.getArticleSigle(id)
            .subscribe(data => {
                this.article = data;
                // console.log(data);
        });
    }
}