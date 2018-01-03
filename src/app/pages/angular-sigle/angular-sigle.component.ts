import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from './../../theme/services/articleService/article.service';

@Component({
    templateUrl: './angular-sigle.component.html',
    styleUrls: ['./angular-sigle.component.scss']
})

export class AngularSigleComponent implements OnInit{
    public article;

    constructor(private route: ActivatedRoute, private service: ArticleService){};
    ngOnInit(){
        let id = this.route.snapshot.params['id'];

        this.service.getAngularSigle(id)
            .subscribe(data => {
                this.article = data;
            });
    };
}