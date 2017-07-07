import { RepasoPage } from './app.po';

describe('repaso App', () => {
  let page: RepasoPage;

  beforeEach(() => {
    page = new RepasoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
