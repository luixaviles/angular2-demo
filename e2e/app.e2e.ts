import { AssistantListPage } from './app.po';

describe('AssistantList App', function() {
  let page: AssistantListPage;

  beforeEach(() => {
    page = new AssistantListPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('assistant-list works!');
  });
});
