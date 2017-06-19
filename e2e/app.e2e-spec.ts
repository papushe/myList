import { MyListPage } from './app.po';

describe('my-list App', () => {
  let page: MyListPage;

  beforeEach(() => {
    page = new MyListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
