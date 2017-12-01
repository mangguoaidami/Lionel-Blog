import { CoreUIPage } from './app.po';
// var CoreUIPage = require('./app.po.ts')

describe('lionel-blog App', function() {
  let page: CoreUIPage;

  beforeEach(() => {
    page = new CoreUIPage();
  });
  
  /**
   * 浏览器加载完成
   */
  it('loginPage be onload', () => {
    page.navigateTo();
  })
  /**
   * 检验ELEMENT存在
   */
  // it('if element expent',() => {
  //   expect<any>(page.getBtn().isPresent()).toBe(true);    
  // })

  /**
   * 正式检测
   */
  it('pass form validation', () => {
    page.getEmail().sendKeys('peter@klaven');
    page.getPassword().sendKeys('cityslicka');
    page.getBtn().click();
  });

  /**
   * 页面跳转
   */
  it('rooting home page', function(){
    // expect<any>(page.getHelloText()).toEqual('HelloWorld!');
    expect<any>(page.getHelloText().isPresent()).toBe(true); 
  })
});
