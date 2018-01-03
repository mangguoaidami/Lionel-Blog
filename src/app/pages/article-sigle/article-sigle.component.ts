import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../../theme/services/articleService/article.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PagerService } from './../../theme/services/pagerService/pager.service';
// import { Article } from './../../theme/services/articleService/article.model';

@Component({
    templateUrl: './article-sigle.component.html',
    styleUrls: ['./article-sigle.component.scss']
})

export class ArticleSigleComponent implements OnInit{
    // array of all items to be paged
    public article: any = {};
    // pager object
    public pager: any = {};
    // paged items
    public pagedItems: any[];

    constructor(private route: ActivatedRoute, private service: ArticleService, private pagerService: PagerService){}

    ngOnInit(){
        /** get pages route's ID */
        let id = this.route.snapshot.params['id'];
        this.service.getArticleSigle(id)
            .subscribe(data => {
              this.article = data;
                this.article.innerHTML = data.string.split('🔚');
                // console.log(this.article);

                // initialize to page 1
                this.setPage(1);
        });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.article.innerHTML.length, page);

        // get current page of items
        this.pagedItems = this.article.innerHTML.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
