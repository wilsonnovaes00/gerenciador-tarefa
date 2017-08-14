import { browser, by, element } from 'protractor';

export class GerenciadorProjetosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-root h1')).getText();
  }
}
