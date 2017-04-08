import { UnicornsPage } from './app.po';

describe('unicorns App', () => {
  let page: UnicornsPage;

  beforeEach(() => {
    page = new UnicornsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
