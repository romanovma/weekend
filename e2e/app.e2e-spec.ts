import { WeekendPage } from './app.po';

describe('weekend App', function() {
  let page: WeekendPage;

  beforeEach(() => {
    page = new WeekendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
