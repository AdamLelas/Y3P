import { Year3ProjectPage } from './app.po';

describe('year3-project App', () => {
  let page: Year3ProjectPage;

  beforeEach(() => {
    page = new Year3ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
