import { browser, element, by } from 'protractor';

export class CoreUIPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToList() {
    return browser.get('/pages/list');
  }

  getLoginPageH3() {
    return element(by.css('h3')).getText();
  }

  getEmail(){
    return element(by.id('formGroupEmail'));
  }

  getPassword(){
    return element(by.id('formGroupPassword'));
  }
  //login-submit
  getBtn(){
    return element(by.id('test_btn'));
  }

  getHelloText(){
    return element(by.id('test_h2'));
  }
}
