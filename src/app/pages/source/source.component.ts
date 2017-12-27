import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './source.component.html',
    styleUrls: ['./source.component.scss']
})

export class SourceComponent implements OnInit{
  public sources: object[];

  constructor(){
    this.sources = [
      { url: 'https://mmattozzi.github.io/cocoa-rest-client/', imgSrc: '../../../assets/img/request.png', introduction: 'A request client.'},
      { url: 'https://code.visualstudio.com/', imgSrc: '../../../assets/img/vscode.jpg', introduction: 'VS code'},
      { url: 'https://nodejs.org/zh-cn/download/', imgSrc: '../../../assets/img/nodejs.jpg', introduction: 'Node Js'},
      { url: 'https://www.iterm2.com/', imgSrc: '../../../assets/img/iterm.jpg', introduction:'Iterm 2'},
      { url: 'https://yarnpkg.com/en/docs/getting-started', imgSrc:'../../../assets/img/feature-speed.png', introduction: 'yarn'},
      { url: 'http://starvpnapp.com', imgSrc:'../../../assets/img/star_vpn.png', introduction: 'VPN'}
    ]
  }

    ngOnInit(){}

}
