export class AssistantListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('assistant-list-app h1')).getText();
  }
}
