import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from './../../theme/services/articleService/article.service';

@Component({
    templateUrl: './rxjs-sigle.component.html',
    styleUrls: ['./rxjs-sigle.component.scss']
})

export class RxjsSigleComponent implements OnInit{
    public article;
    
        constructor(private route: ActivatedRoute, private service: ArticleService){}
        
        ngOnInit(){
            let id = this.route.snapshot.params['id'];
    
            this.service.getRxjsSigle(id)
                .subscribe(data => {
                    this.article = data;
                });
        }
}