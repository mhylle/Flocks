import { FlocksPage } from './app.po';

describe('flocks App', () => {
  let page: FlocksPage;

  beforeEach(() => {
    page = new FlocksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
